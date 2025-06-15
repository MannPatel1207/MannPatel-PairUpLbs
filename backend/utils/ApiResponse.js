class ApiResponse {
  constructor(success, message, data = null) {
    this.success = success;
    this.message = message;
    if (data !== null) {
      this.data = data;
    }
  }
}

class SuccessResponse extends ApiResponse {
  constructor(message = "Success", data = null) {
    super(true, message, data);
  }
}

class ErrorResponse extends ApiResponse {
  constructor(message = "Error", statusCode = 500) {
    super(false, message);
    this.statusCode = statusCode;
  }
}

module.exports = { SuccessResponse, ErrorResponse };
