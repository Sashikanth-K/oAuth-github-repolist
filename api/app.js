const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes");

const app = express();

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

// API routes
app.use("/api", apiRoutes);

module.exports = app;
