const express = require('express');

const { getAll, get, add, replace, remove } = require('../data/item');
const { checkAuth } = require('../util/auth');
const {
  isValidText,
  isValidDate,
  isValidImageUrl,
} = require('../util/validation');

const router = express.Router();

router.get('/', async (req, res, next) => {
  console.log(req.token);
  try {
    const items = await getAll();
    res.json({ items: items });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
