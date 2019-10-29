module.exports = {
  Query: {
    translates: async (parent, args, { models }) => await models.TranslatedWord.findAll(),
  },

  TranslatedWord: {
    translate: async (word, args, { models }) => await models.Translate.findAll({
      where: {
        word: word.word,
      },
    }),
  },
};
