const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Student = require('../models/StudentModel');
const Manager = require('../models/ManagerModel');

// Authentication Middleware
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user is a student or a manager
        let user = await Student.findById(decoded?.id);
        if (!user) {
          user = await Manager.findById(decoded?.id);
        }

        if (!user) {
          return res.status(401).json({ message: "User not found" });
        }

        req.user = user;
        next();
      } else {
        res.status(401).json({ message: "Token not found" });
      }
    } catch (error) {
      res.status(401).json({ message: "Token expired or invalid, please login again" });
    }
  } else {
    res.status(401).json({ message: 'Authorization token missing from header' });
  }
});

// Role-Based Access Control Middleware
const requireRole = (roles) => {
  return asyncHandler(async (req, res, next) => {
    const user = req.user;

    if (!user || !roles.includes(user.row || user.role)) {
      return res.status(403).json({ message: "Access denied: You do not have permission to make this request." });
    }

    next();
  });
};

module.exports = { authMiddleware, requireRole };
