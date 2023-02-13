const express = require("express");

const app = express();

/* middleware */
app.use((req, res, next) => {
  console.log(req.url);
  setTimeout(() => {
    next();
  }, 5000);
});
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("start...");
});
