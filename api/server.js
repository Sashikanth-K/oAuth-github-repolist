const envParams = require("dotenv").config();
const app  = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Test app listening on port ${PORT}`);
});
