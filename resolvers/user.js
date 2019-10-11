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

    User: {
      messages: async (user, args, { models }) => {
        return await models.Message.findAll({
          where: {
            userId: user.id,
          },
        });
      },
    },

}
