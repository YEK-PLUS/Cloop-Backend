const Router = require('express').Router;

const router = Router();
router.get('/', (req, res) => {
  res.status(200).send("powered by YEK");
});

module.exports = router;
