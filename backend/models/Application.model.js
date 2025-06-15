class Application {
  constructor(name, email, portfolio, resumeUrl, jobId) {
    this.name = name;
    this.email = email;
    this.portfolio = portfolio;
    this.resumeUrl = resumeUrl;
    this.jobId = jobId;
    this.appliedAt = new Date();
  }
}

module.exports = Application;
