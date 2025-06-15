const express = require('express');
const jobRouter = express.Router();

const {getAllJobs} = require('../controllers/jobs.controller')

jobRouter.get('/',getAllJobs);


module.exports = jobRouter;