const express = require('express');
const { checkAuth } = require('../util/auth');
const { getAll, get, add, replace, remove } = require('../data/order');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const orders = await getAll();
    console.log("all")
    console.log(orders)
    res.json({ orders: orders });
  } catch (error) {
    next(error);
  }
});



router.get('/email', async (req, res, next) => {
  try {
    const order = await get(req.query.email);
    console.log(order)
    res.json({ order: order });
  } catch (error) {
    next(error);
  }
});

router.use(checkAuth);
router.post('/', async (req, res, next) => {
  const data = req.body;

  try {
    await add(data);
    res.status(201).json({ message: 'Order saved.', order: data });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
