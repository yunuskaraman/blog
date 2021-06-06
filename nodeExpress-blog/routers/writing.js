const express = require('express');
const router = express.Router();

const writingControllers = require('../controllers/writing');

router.get("/",writingControllers.getIndex);

router.get("/articles",writingControllers.getArticles);

router.get("/articles/:articleid",writingControllers.getArticle);

router.get("/details",writingControllers.getArticlesDetails);

router.get("/cart",writingControllers.getCart);

router.get("/orders",writingControllers.getOrders);

module.exports = router;