const { Router } = require('express');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.use( async(req,res,next) => {
    if (req.headers.authorization) {
      try {
        const token = req.headers.authorization;
        const uid = await jwt.verify(token, settings.secretKeys.jwt);
        return next();
      } catch (e) {
        return res.status(401).send(settings.messages.sessionExpired).end();
      }
    }
    return res.status(401).send(settings.messages.needAuthToken).end();
  });
}
