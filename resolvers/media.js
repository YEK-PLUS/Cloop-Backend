module.exports = {
  Query: {
    media: async (parent, { uid }, { models }) => await models.Media.getMedia(uid),
  },
  Mutation: {

  },

};
