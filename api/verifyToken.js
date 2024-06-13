// Import the jsonwebtoken library, which provides methods to work with JSON Web Tokens (JWT)
const jwt = require("jsonwebtoken");

// Define the verify middleware function
function verify(req, res, next) {
  // Get the token from the request headers
  const authHeader = req.headers.token;

  // Check if the token exists
  if (authHeader) {
    // Extract the token from the "Bearer <token>" format
    const token = authHeader.split(" ")[1];

    // Verify the token using the secret key from the environment variables
    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      // If there's an error (e.g., token is invalid), respond with a 403 status code and an error message
      if (err) res.status(403).json("Token is not valid!");

      // If the token is valid, attach the decoded user information to the request object
      req.user = user;

      // Call the next middleware function in the stack
      next();
    });
  } else {
    // If no token is provided, respond with a 401 status code and an error message
    return res.status(401).json("You are not authenticated!");
  }
}

// Export the verify middleware function so it can be used in other parts of the application
module.exports = verify;
