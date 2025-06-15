const { SuccessResponse, ErrorResponse } = require("../utils/ApiResponse");
const applications = require('../constants/applications.constant');
const jobs = require('../constants/jobs.constant')
const Application = require('../models/Application.model')

const addApplication = (req,res) => {

    //retrive jobid
    let {jobid} = req.params;
    let formData = req.body;
    jobid= Number(jobid);

    console.log();

    //find job
    const job = jobs.filter(job => job.id === jobid);

    //create appliucation
    const application = new Application(
        formData.name,
        formData.email,
        formData.portfolio,
        req.file.path,
        job[0].id
    )
    //add appliaction
    applications.push(application)

    //send res
    res.status(200).json(new SuccessResponse('application sent successfully',application))
}

module.exports = {addApplication};
