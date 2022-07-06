const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) return res.status(401).send({ error: 'No token provided' });

  const parts = authHeaders.split(' ');

  if (!parts.length === 2) return res.status(401).send({ error: 'Token error' });

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) return res.status(401).send({ error: 'Token malformatted' });

  return jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Invalid token' });

    req.data = {
      uuid: decoded.uuid,
      name: decoded.name,
      email: decoded.email,
      message: 'token valid!',
    };

    return next();
  });
};
