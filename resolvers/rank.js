module.exports = {
  Query: {
    rank: async (user, args, { models }) => await models.Rank.findOne({
      where: {
        userUid: user.uid,
      },
    }),
    authority: async () => ([
      {
        name: 'birthday',
        level: 1,
      },
    ]),
  },
  Mutation: {

  },

};
