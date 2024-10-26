const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.error("Error:", error); // Log the error to the console

      // Send an error response to the frontend
      res.status(500).json({ message: "Something went wrong. Please try again later." });
    }
  };
};

module.exports = asyncHandler;
