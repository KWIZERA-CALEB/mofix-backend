const UserModel = require('../Models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//store user
const store = (req, res)=> {
    //has password
    bcrypt.hash(req.body.password, 10, (error, Hashedpassword)=> {
        if(error) {
            console.log(error)
            res.json({
                message: 'Failed to hash the password'
            })
        }
        //handle user registration
        let user = new UserModel({
            username: req.body.username,
            email: req.body.email,
            password: Hashedpassword
        })
    
        user.save()
            .then(()=> {
                res.json({
                    message: 'User registered'
                })
            })
            .catch((error)=> {
                console.log(error)
                res.json({
                    message: 'Failed to add user'
                })
            })
        //handle user registration
    })

    
}


const login = (req, res)=> {
    let username = req.body.username
    let password = req.body.password

    UserModel.findOne({ $or: [{ email: username }, { username: username }] })
        .then((user)=> {
            //check password
            if(user) {
                bcrypt.compare(password, user.password, (error, result)=> {
                    if(error) {
                        res.json({
                            message:'error'
                        })
                    }

                    if(result) {
                        let token = jwt.sign({name: user.username}, 'verySecretValue', {expiresIn: '1hr'})
                        res.json({
                            message: 'User logined',
                            token: token
                        })
                    }else{
                        res.json({
                            message: 'Password is wrong'
                        })
                    }
                })
            }else{
                res.json({
                    message: 'No user found'
                })
            }
        })
        .catch((error)=> {
            console.log(error)
            res.json({
                message: 'Error occured logging in'
            })
        })
}

module.exports = {store, login}