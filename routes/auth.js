const { Router } = require('express');
const models = require('../models');
const jwt = require('jsonwebtoken');

const router = Router();
router.post('/login', async (req, res) => {
  const {login,password} = req.body
  const user = await models.User.findByLogin(login);
  if (!user) {
    throw new UserInputError(settings.messages.requiredFields.error);
  }
  const isValid = await user.validatePassword(password);
  if (!isValid) {
    throw new AuthenticationError(settings.messages.invalidPassword.error);
  }
  res.status(200).send({ token: jwt.sign({uid:user.uid}, settings.secretKeys.jwt) });
});

router.post('/token', async(req,res) => {
  const token = req.headers.authorization.split(' ')[1];
  const uid = await jwt.decode(token) ;
  const response = uid || settings.messages.unauthorized
  return res.status(200).send( response );
});

module.exports = router;
