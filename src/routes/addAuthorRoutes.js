const express = require('express');
const addAuthorRouter = express.Router();

function router(nav){
addAuthorRouter.get('/',function(req,res){
    res.render('addAuthor',{
        nav,
        title:'Library',
        h1:'Add Author'
    })
})

return addAuthorRouter;
}
module.exports = router;
