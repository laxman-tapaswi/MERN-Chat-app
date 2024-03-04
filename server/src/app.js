const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const Cors = require("cors");

const ErrorMiddleware = require("./middlewares/ErrorMiddleware");

//  express server
const app = express();

//  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Cors());
app.use(cookieParser());
app.use(morgan("dev"));

//  import all routes
const user = require("./routes/user.route");

//  all routes
app.use("/api/v1/user", user);

app.get("/", (req, res) => {
  res.send("<h1>server is working</h1>");
});

//  errorHandler middleware
app.use("/upload", express.static("upload"));
app.use(ErrorMiddleware);

module.exports = app;
