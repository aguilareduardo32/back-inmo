require("dotenv").config();
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");
const config = "../config".cloudinary;

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret,
});
/* cloudinary.config({
  cloud_name: "dblhkzomr",
  api_key: 292781696357568,
  api_secret: "73lplgv1SWrbCUMNgwhliFb7ck0",
}); */

var storage = cloudinaryStorage({
  cloudinary,
  folder: "inmuebles", // The name of the folder in cloudinary
  allowedFormats: ["jpg", "png"],
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: function (req, res, cb) {
    cb(null, res.originalname); // The file on cloudinary would have the same name as the original file name
  },
});

const uploader2 = multer({ storage });
module.exports = uploader2;
