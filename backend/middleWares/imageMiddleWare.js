var multer = require('multer');

module.exports.image = {
    storage:function (){
        var storage = multer.diskStorage({
            destination:function(req,file,cb){
                cb(null,'public/images/')
            },
            filename: function(req,file,cb){
                cb(null,file.originalname)
            }
        })
        return storage;
    },
    allowedImage : function(req,file,cb){
        if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)){
            req.fileValidationError = 'only image files are allowed';
            return cb(new Error('only image files are allowed!'),false)
        }
        cb(null,true)
    }
}