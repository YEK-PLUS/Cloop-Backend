module.exports = {
  Query: {
    userDetail: (parent, { userUid }, { models }) => models.UserDetail.findByPk(userUid),
  },
};
