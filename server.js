const express = require("express");
// var jwt = require("jsonwebtoken");
const app = express();
var cons = require("consolidate");
const path = require("path");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// view engine setup
app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "html");
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "localhost:4200");
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const usersRoute = require("./routes/usersRoute");
const articlesRoute = require("./routes/articlesRoute");
const authRoutes = require("./routes/authRoutes");

app.use("/users", usersRoute);
app.use("/articles", articlesRoute);
app.use("/login", authRoutes);

// app.use(bodyParser.json());

app.listen(3300, function () {
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
