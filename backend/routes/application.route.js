const express = require('express');
const applicationRouter = express.Router();
const upload = require("../middlewares/multer.middleware");

const {addApplication} = require('../controllers/application.contoller')

applicationRouter.post('/:jobid',upload.single('resume'),addApplication);


module.exports = applicationRouter;