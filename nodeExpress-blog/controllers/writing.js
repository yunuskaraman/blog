const Articles = require('../models/article')

exports.getIndex=(req,res,next) =>{

    const article = Articles.getAll();

    res.render('writing/index',{title:'Makale blog',
                        articles:article,
                        path : '/'});
}

exports.getArticles=(req,res,next) =>{

    const article = Articles.getAll();

    res.render('writing/articles',{title:'Makale',
                        articles:article,
                        path : '/articles'});
}

exports.getArticle=(req,res,next) =>{

   const article = Articles.getById(req.params.articleid)

   res.render('writing/article-detail',{
       title : article.name,
       article: article,
       path : '/articles'
   })

   res.redirect('/');
}

exports.getArticlesDetails=(req,res,next) =>{

    res.render('writing/cart',{title:'Makale Detay',
                        path : '/details'});
}

exports.getCart=(req,res,next) =>{

    res.render('writing/cart',{title:'Cart',
                        path : '/cart'});
}

exports.getOrders=(req,res,next) =>{

    res.render('writing/orders',{title:'Orders',
                        path : '/orders'});
}
