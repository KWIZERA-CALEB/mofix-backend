const path = require('path')
const multer = require('multer')

//saving image location
let storage = multer.diskStorage({
    //location for the file
    destination: (req, file, cb)=> {
        cb(null, 'uploaded_movie_thumbs')
    },
    //filename for the file //renaming the file
    filename: (req, file, cb)=> {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

//handle file upload and verification
let upload = multer({
    storage: storage,
    

    fileFilter: (req, file, callback)=> {
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg") {
            callback(null, true)
        }else{
            console.log('Only image of png and jpg are allowed')
        }
    },

    //limit file sizes
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})

module.exports = upload