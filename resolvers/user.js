const jwt = require('jsonwebtoken');
const { AuthenticationError, UserInputError } = require('apollo-server');
const uuid = require('uuid/v4');

module.exports = {
  Query: {
    users: async (parent, args, { models }) => await models.User.findAll(),
    user: async (parent, { uid }, { models }) => await models.User.findByPk(uid),
    me: async (parent, args, { models, me }) => await models.User.findByPk(me.uid),
    birthdays: (parent, { date, type }, { models }) => models.User.findByDate(date, type),
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
    avatar: async (user, args, { models }) => {
      const avatarUid = await models.UserValues.findOne({
        where: {
          userUid: user.uid,
          name: 'avatar',
        },
      });
      const avatar = await models.Media.getMedia(avatarUid.value);
      return avatar;
    },
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
