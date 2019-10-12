const jwt = require('jsonwebtoken');
const uuid = require( 'uuid/v4');
const { AuthenticationError, UserInputError } = require('apollo-server');

module.exports={
    Query: {
      users: async (parent, args, { models }) => {
        console.log(models)
        return await models.User.findAll();
      },
      user: async (parent, { uid }, { models }) => {
       return await models.User.findByPk(uid);
      },
    },
    Mutation: {
      signUp: async (
        parent,
        { username, mail, password },
        { models },
      ) => {
        const user = await models.User.create({
          uid:uuid(),
          username,
          mail,
          password,
        });
        return { token: jwt.sign(user.uid, settings.secretKeys.jwt) };
      },
      signIn: async (
        parent,
        { login, password },
        { models, secret },
      ) => {
        const user = await models.User.findByLogin(login);
        if (!user) {
          throw new UserInputError(settings.messages.requiredFields.error);
        }
        const isValid = await user.validatePassword(password);
        if (!isValid) {
          throw new AuthenticationError(settings.messages.invalidPassword.error);
        }
        return { token: jwt.sign(user.uid, settings.secretKeys.jwt) };
      },

    },

    User: {
      details: async (user, args, { models }) => {
        return await models.UserDetail.findOne({
          where: {
            userUid: user.uid,
          },
        });
      },
    },

}
