const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getShop);
router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getMyCart);
router.get('/checkout', shopController.getCheckOut);
router.get('/orders', shopController.getOrders);

module.exports = router;
