const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    console.log("Token:", token);

    // No token
    if (!token) {
      return res.status(401).json({
        message: "Please login",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.TOKEN_SECRET_KEY, (err, decoded) => {
      console.log("JWT Error:", err);
      console.log("Decoded:", decoded);

      // Token is invalid or expired
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({
            message: "Your session has expired. Please login again.",
            error: true,
            success: false,
            expired: true,
          });
        }

        return res.status(401).json({
          message: "Invalid authentication token. Please login again.",
          error: true,
          success: false,
        });
      }

      // Make sure decoded data exists
      if (!decoded) {
        return res.status(401).json({
          message: "Invalid authentication token.",
          error: true,
          success: false,
        });
      }

      // Get user ID from token
      req.userId = decoded._id || decoded.id || decoded.userId;

      // Make sure user ID exists
      if (!req.userId) {
        return res.status(401).json({
          message: "Invalid user token.",
          error: true,
          success: false,
        });
      }

      // Token is valid
      next();
    });
  } catch (err) {
    console.error("Authentication error:", err);

    return res.status(401).json({
      message: err.message || "Authentication failed",
      data: [],
      error: true,
      success: false,
    });
  }
}

module.exports = authToken;
