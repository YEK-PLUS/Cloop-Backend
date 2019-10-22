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

router.post('/token', async (req, res) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization;
      return await res.status(200).send(jwt.verify(token, settings.secretKeys.jwt));
    } catch (e) {
      return res.status(200).send(settings.messages.sessionExpired);
    }
  }
  return res.status(200).send(settings.messages.needAuthToken);
});

module.exports = router;
