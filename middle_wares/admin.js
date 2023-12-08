const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_SECRET_KEY;
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  jwt.verify(token, jwtKey, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.userData = decodedToken;
    next();
  });
};

const isAdmin = (req, res, next) => {
  console.log(req.userData);
  if (req.body.role === "admin") {
    return next();
  } else {
    return res.status(403).json({ message: "Permission denied" });
  }
};

module.exports = { verifyToken, isAdmin };
