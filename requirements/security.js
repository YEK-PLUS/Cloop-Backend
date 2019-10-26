const jwt = require('jsonwebtoken');

module.exports = (app) => {
  app.use(async (req, res, next) => {
    if(settings.whiteList.indexOf(req.path) > -1){
      return next();
    }
    if (req.headers.authorization) {
      try {
        const token = req.headers.authorization;
        if (await jwt.verify(token, settings.secretKeys.jwt)) {
          return next();
        }
        return res.status(401).send(settings.messages.sessionExpired).end();
      } catch (e) {
        return res.status(401).send(settings.messages.sessionExpired).end();
      }
    }
    return res.status(401).send(settings.messages.needAuthToken).end();
  });
};
