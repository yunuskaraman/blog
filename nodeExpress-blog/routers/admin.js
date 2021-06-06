const express = require('express');
const router = express.Router();

const adminControllers = require('../controllers/admin');

router.get('/articles',adminControllers.getArticles);

router.get("/add-article",adminControllers.getAddArticles);

router.post("/add-article",adminControllers.postAddArticles);

router.get("/articles/:articleid",adminControllers.getEditArticles);

router.post("/articles",adminControllers.postEditArticles);

router.post("/delete-article",adminControllers.postDeleteArticle);

module.exports = router; //bu şekilde dışarıya açıyoruz
