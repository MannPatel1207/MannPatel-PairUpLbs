require('dotenv').config();
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser");
const jobRouter = require('./routes/jobs.route')
const applicationRouter = require('./routes/application.route')


const app = express();
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
console.log(PORT);


app.use("/api/jobs", jobRouter);
app.use("/api/application", applicationRouter);


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
