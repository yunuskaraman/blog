const Articles = require('../models/article')

exports.getArticles=(req,res,next) =>{

    const article = Articles.getAll();

    res.render('admin/articles',{title:'Admin Articles',
                        articles:article,
                        path : '/admin/articles',
                        action:req.query.action,
                        id:req.query.id});
    
}

exports.getAddArticles=(req,res,next)=>{
    res.render('admin/add-article',
    {title:'New Add article',
    path : '/admin/add-article'});
}

exports.postAddArticles = (req,res,next)=>{
    
   const article = new Articles(req.body.name,
                                //req.body.price,
                                req.body.imageUrl,
                                req.body.description );
    article.saveArticle();

    res.redirect("/");
}

exports.getEditArticles=(req,res,next)=>{

    const article = Articles.getById(req.params.articleid);

    res.render('admin/edit-article',
    {title:'Edit article',
    path : 'admin/articles',
    article: article 
    });
}

exports.postEditArticles = (req,res,next)=>{
    
    const article = Articles.getById(req.body.id);

    article.name=req.body.name;
    //article.price=req.body.price;
    article.imageUrl=req.body.imageUrl;
    article.description=req.body.description;

    Articles.Update(article);

    res.redirect("/admin/articles?action=edit&id="+article.id);
}

exports.postDeleteArticle = (req,res,next)=>{
    const deleteId = Articles.DeleteById(req.body.articleid);
  
   // console.log(deleteId);

    res.redirect('/admin/articles?action=delete&id='+deleteId);
}
