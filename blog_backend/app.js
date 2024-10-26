const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectToDatabase = require("./app/config/db");

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// connect to database
connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log("Server started on port " + process.env.PORT);
});