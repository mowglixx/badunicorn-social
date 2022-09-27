const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../routes/auth/models");

exports.tokenCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.hashPass = async (req, res, next) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 8);
      next();
    } else if (req.body.key === "password") {
      req.body.value = await bcrypt.hash(req.body.value, 8);
      next();
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
