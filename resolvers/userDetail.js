module.exports={
    Query: {
      userDetail: (parent, { userUid }, { models }) => {
        return models.UserDetail.findByPk(userUid);
      },
    },
}
