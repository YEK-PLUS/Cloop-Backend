const { Router } = require('express');
const models = require('../models');
const jwt = require('jsonwebtoken');

const router = Router();
router.post('/login', async (req, res) => {
  const {login,password} = req.body
  if (!login||!password) {
    return res.status(400).send(settings.messages.requiredFields);
  }
  const user = await models.User.findByLogin(login);
  if (!user) {
    return res.status(400).send(settings.messages.userNotFound);
  }
  const isValid = await user.validatePassword(password);
  if (!isValid) {
    return res.status(401).send(settings.messages.invalidPassword);
  }
  return res.status(200).send({
    token: jwt.sign( { uid:user.uid }, settings.secretKeys.jwt, { expiresIn: '1h' })
  });
});

router.post('/token', async(req,res) => {
  const token = req.headers.authorization;
  const uid = await jwt.verify(token, settings.secretKeys.jwt) ;
  const response = uid || settings.messages.unauthorized
  return res.status(200).send( response );
});

module.exports = router;
