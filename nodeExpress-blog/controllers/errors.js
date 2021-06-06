exports.get404Page=(req,res)=>{
    res.status(404).render('eror/404',{title:'404 Page'});
}