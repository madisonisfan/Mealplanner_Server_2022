var express = require("express");
//const morgan = require("morgan");
//const recipeRouter = require("./routes/recipeRouter");

//const hostname = "localhost"; //a
//const port = 3000; //a

//const app = express(); //a
//app.use(morgan("dev"));
//app.use(express.json());

//app.use("./recipes", recipeRouter);

var router = express.Router(); //?

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//app.use(express.static(__dirname + "/public"));
/*
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>Express server</h1></body></html>");
});*/

/*
app.listen(port, hostname, () => {
  console.log(`serer running at http://${hostname}:${port}`);
});*/

module.exports = router;
