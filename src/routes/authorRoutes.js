const express = require('express');
const authorRouter = express.Router();

 function router(nav){
    var author = [
    {
      name:'joseph Barbera',
      dob:'1940',
      img:"joseph.jpg" ,
      bok:'Tom And Jerry'
       
    },
    {
        name:'J K Rowling',
        dob:'1965',
        img:"jkr.jpg" ,
        bok:'Harry potter' 
      },
      {
        name:'joseph ',
        dob:'1940',
        img:"joseph.jpg" ,
        bok:'Tom And Jerry' 
      }
]


authorRouter.get('/',function(req,res){
    res.render("author",
    {
        nav,
        title:'library',
       h1:'Authors',
       author

    });
   
    
    
});
authorRouter.get('/:id',function(req,res){
   const id = req.params.id;
    res.render('author1',{
        nav,
        h1:'Author',
        title:'library',
        author1:author[id]
    }
    );
});
    return authorRouter;
 }


module.exports = router;