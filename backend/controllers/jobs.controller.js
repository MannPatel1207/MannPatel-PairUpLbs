
const jobs = require("../constants/jobs.constant");
const { SuccessResponse, ErrorResponse } = require("../utils/ApiResponse");


/**
 * @desc    Get all job listings
 * @route   GET /api/jobs
 * @access  Public
 */
const getAllJobs = (req,res) => {
    return res.status(200).json(new SuccessResponse("All jobs retrived successfuly",jobs))
}

module.exports = {getAllJobs}