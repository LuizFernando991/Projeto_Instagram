import multer from 'multer'
import path from 'path'

//Destination to store post images


const imageStorage = multer.diskStorage({
    destination : (req, file, cb)=>{
        let folder = ''
        if(req.baseUrl.includes('user')){
            folder = 'profileImages'
        }else if (req.baseUrl.includes('post')){
            folder = 'postImages'
        }
        cb(null, `src/public/images/${folder}`)
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now()+String(Math.floor(Math.random()*10))+path.extname(file.originalname))
    },
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(png|jpg)$/)){
            return cb(new Error ('file not suported'))
        }
        cb(null, true)
    }
})

export default imageUpload