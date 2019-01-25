const jwt = require('jsonwebtoken')
const settings = require('../config/settings.js')

exports.createToken = function (id) {
  const token = jwt.sign({ id: id }, settings.jwtSecret, { algorithm: 'RS256' }, { expiresIn: 3600 * 24 })
  return token
}
exports.verifyToken = function (token) {
  const result = jwt.verify(token, settings.jwtSecret, { algorithm: 'RS256' })
  return result
}
