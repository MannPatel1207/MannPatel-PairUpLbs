const multer = require("multer");
const path = require("path");
const { ErrorResponse } = require('../utils/ApiResponse');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

const uploadResume = (err, req, res, next) => {
    
    try {
        upload.single('resume');
        console.log('fileuploaded')
        next();
    } catch (error) {
        console.log(error);
        return res.status(501).json(new ErrorResponse("Resume not uploaded"));
    }
}
   
module.exports = upload;

