const hash = require('pbkdf2-password')();
const auth = require('../middlewares/auth');
module.exports = (app) => {
  app.use((req, res,next) => {
    if(settings.whiteList.indexOf(req.path) > -1){
      next()
    }
    else if (auth(req)) {
      next()
    }
    else{
      res.status(401).send(settings.messages.unauthorized);
    }
  });
}
