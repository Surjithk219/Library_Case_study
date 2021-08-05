const express = require('express');
const logRouter = express.Router();

function router(nav){
logRouter.get('/',function(req,res){
    res.render('login',{
        nav,
        title:'Library',
        h1:'LOGIN'
    })
})

return logRouter;
}
module.exports = router;
