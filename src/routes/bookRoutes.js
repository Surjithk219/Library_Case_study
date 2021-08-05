const express = require('express');
const bookRouter = express.Router();
function router(nav){
    var books= [
        {
          title:'Tom and Jerry',
          author:'joseph',
          img:"tom.jpg"
    
    },
    {
        title:'hari poter',
        author:'joseph',
        img:"hari.jpg"
    
    },
    {
        title:'harii',
        author:'joseph',
        img:"hari2.jpg"
    
    }
    ]
    
    
    bookRouter.get('/',function(req,res){
        res.render("books",
        {
           nav,
           title:'library',
           h1:'library',
           h2:books,
           books
        });
    });
    
    bookRouter.get('/:id',function(req,res){
       const id = req.params.id;
        res.render('book',{
            nav,
            title:'library',
            h1:'Books',
            book:books[id]
        })
    });
    return bookRouter
}

module.exports = router;