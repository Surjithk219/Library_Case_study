const express = require('express');
// const authorRouter = express.Router();
const app = new express();
const nav = [{link:'/books',name:'Books'},
{link:'/author',name:'Author' },
{link:'/signup',name:'sign up' },
{link:'/login',name:'Login' },
{link:'/admin',name:'Add book' },
{link:'/addAuthor',name:'Add Author' }]
const bookRouter = require('./src/routes/bookRoutes')(nav); 
 const authorRouter = require('./src/routes/authorRoutes')(nav);
 const adminRouter = require('./src/routes/adminRoutes')(nav);
 const signupRouter = require('./src/routes/signupRoutes')(nav);
 const addAuthorRouter = require('./src/routes/addAuthorRoutes')(nav);
 const logRouter = require('./src/routes/logRoutes')(nav);
 app.use('/login',logRouter);
app.use('/author',authorRouter);
app.use('/admin',adminRouter);
app.use('/signup',signupRouter);
app.use('/addAuthor',addAuthorRouter);
//const bookRouter = express.Router();
app.use('/books',bookRouter); 
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views')
app.get('/',function(req,res){
    res.render("index",
    {
       nav,
       title:'library',
       h1:'library',
       
    });  
});




app.listen(5003);