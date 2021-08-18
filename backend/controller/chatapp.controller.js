var multer = require('multer');
var imageMiddleWare = require('../middleWares/imageMiddleWare.js');
var imageModel = require('../models/image.models.js');

module.exports = {
    imageUploadForm : function(req,res){
        res.render('upload-form.ejs')
    },
    storeImage : function(req, res){
        var upload = multer({
            dest : 'chatapp',
            limits : {
                fileSize : 1000000,
            },
            image : {
                type  : Buffer
            },
            storage : imageMiddleWare.image.storage(),
            allowedImage : imageMiddleWare.image.allowedImage
        }).single('image');
        upload(req,res,function(err){
            console.log('request : ' + req);
            if(err instanceof multer.MulterError){
                res.send(err)
                console.log('error : '+ err);
            }
            else if(err){
                res.send(err)
            }
            else{
                var image_Name = req.file.originalname
                var inputValues = {
                    imageName : image_Name
                }
                imageModel.storeImage(inputValues,function(data){
                    res.render('upload-form.ejs', {alertMsg : data})
                })
            }
        })
    }
}

// exports.addFiles = (req, res)=> {
    
//     const fileInfo = req.body;
//     console.log("FileInfo: "+JSON.stringify(fileInfo));
//     chatapp.create(fileInfo).then(result => {
//         res.send({
//             status: true,
//             message : "Files inserted successfully",
//             data: result
//         })
//     }).catch(error => {
//         res.status(500).send({
//             status : false,
//             message : "Files not inserted"
//         })
//     });
// }

// exports.getAllFiles = (req, res)=> {
//     chatapp.findAll().then(data => {
//         res.send(data)
//     }).catch(error => {
//         res.status(500).send({
//             status: false,
//             messaage : error.message || "Something went wrong"
//         })
//     })
// }