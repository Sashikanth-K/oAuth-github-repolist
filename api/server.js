const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// parse application/json
app.use(bodyParser.json());

app.use(cookieParser());

// API routes
app.use('/api', apiRoutes)

app.listen(PORT, () => {
  console.log(`Test app listening on port ${PORT}`)
});
