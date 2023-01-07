const express = require("express");
const app = express();
var cons = require('consolidate');
const path = require('path');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.urlencoded({extended:false}));

const usersRoute = require('./routes/usersRoute');
const articlesRoute = require('./routes/articlesRoute');

app.use('/users', usersRoute);
app.use('/articles', articlesRoute);

app.get("/react", function(req, res){
  res.render("react.html");
});

app.listen(3000, function(){
  console.log("Server OK");
});

//REST API, CRUD, mvc
//middleware (express)
//sequalize
/*
1. GET user из БД и отправить в виде JSON в postman
2. Сделать CRUD для article
*/
//сделать по rest, добавить проверки, переделать под секвалайз  