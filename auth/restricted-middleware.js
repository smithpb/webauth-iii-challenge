const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        res.status(401).json({err: "User not verified"});
      } else {
        next();
      }
    })
  } else {
    res.status(401).json({err: "User not verified"})
  }
}