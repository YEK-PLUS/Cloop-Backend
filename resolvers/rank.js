module.exports = {
  Query: {
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
  Mutation: {

  },

};
