const jwt = require('jsonwebtoken');
const { AuthenticationError, UserInputError } = require('apollo-server');
const { combineResolvers } = require('graphql-resolvers');
const uuid = require('uuid/v4');
const sec = require('../middlewares/auth');

module.exports = {
  Query: {
    users: async (parent, args, { models }) => await models.User.findAll(),
    user: async (parent, { uid }, { models }) => await models.User.findByPk(uid),
    me: combineResolvers(
      sec,
      async (parent, args, { models, me }) => {
        if (!me) {
          return null;
        }
        return await models.User.findByPk(me);
      },
    ),
  },
  Mutation: {
    signUp: async (
      parent,
      { username, mail, password },
      { models },
    ) => {
      const user = await models.User.create({
        uid: uuid(),
        username,
        mail,
        password,
      });
      return { token: jwt.sign(user.uid, settings.secretKeys.jwt) };
    },
    signIn: async (
      parent,
      { login, password },
      { models },
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
    details: async (user, args, { models }) => await models.UserDetail.findOne({
      where: {
        userUid: user.uid,
      },
    }),
    rank: async () => ({
      id: 1,
      rank: 1,
    }),
    authority: async () => ([
      {
        name: 'birthday',
        level: 1,
      },
    ]),
  },

};
