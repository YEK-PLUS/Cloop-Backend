module.exports = {
  Query: {
    userDetail: (parent, { userUid }, { models }) => models.UserDetail.findByPk(userUid),
  },
  UserDetail: {
    avatar: async (user, args, { models }) => {
      const avatarUid = await models.UserValues.findOne({
        where: {
          userUid: user.userUid,
          name: 'avatar',
        },
      });
      const avatar = await models.Media.getMedia(avatarUid.value);
      return avatar;
    },
  },
};
