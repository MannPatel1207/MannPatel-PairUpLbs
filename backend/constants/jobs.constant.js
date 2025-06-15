const Job = require("../models/Job.model");

const jobs = [
    new Job(1, "Frontend Developer", "React-based UI", "Remote"),
    new Job(2, "Backend Developer", "Node.js APIs", "Bangalore")
];

module.exports = jobs;