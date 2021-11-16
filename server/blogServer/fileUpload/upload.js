const multer = require("multer")

var storage = multer.diskStorage({ 
   destination: '../public/images',
   filename: function (req, file, cb) {
      console.log(file);
      cb(null , file.originalname);
   }
});


module.exports = storage;