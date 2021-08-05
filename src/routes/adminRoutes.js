const express = require('express');
const adminRouter = express.Router();

function router(nav){
adminRouter.get('/',function(req,res){
    res.render('addbook',{
        nav,
        title:'Library',
        h1:'Add Book'
    })
})

return adminRouter;
}
module.exports = router;
