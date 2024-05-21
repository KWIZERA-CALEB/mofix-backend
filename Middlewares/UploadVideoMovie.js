const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, 'uploaded_movies_videos')
    },
    filename: (req, file, cb)=> {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

let upload_video = multer({
    storage: storage,

    fileFilter: (req, file, callback)=> {
        if(file.mimetype == "video/mp4" || file.mimetype == "video/avi") {
            callback(null, true)
        }else{
            console.log('Only image of png and jpg are allowed')
        }
    }

})

module.exports = upload_video