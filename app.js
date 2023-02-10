var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var recipeRouter = require("./routes/recipeRouter");

const mongoose = require("mongoose");

//url for the mongodb server
const url = "mongodb://localhost:27017/mealplanner";
//setting up connection
const connect = mongoose.connect(url, {
  //handles deprecation warnings
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//rather then using a catch, another way to do it, is 2 pass an optional 2nd arg
//1st arg: handles the result as usual
//2nd arg: automatically handle the rejected case
//more common to use catch, but this is another way
connect.then(
  () => console.log("connected correctly to server"),
  (err) => console.log(err)
);

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/recipes", recipeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
