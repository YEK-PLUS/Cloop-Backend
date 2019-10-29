const { Router } = require('express');
const models = require('../models');

const router = Router();
router.post('/', async (req, res) => {
  const translates = await models.TranslatedWord.findAll({
    attributes: ['word'],
    include: [
      {
        attributes: ['lang', 'translated_word'],
        model: models.Translate,
      },
    ],
  });

  return res.status(200).send(translates);
});

module.exports = router;
