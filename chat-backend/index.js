const express = require("express");

const app = express();

const port = 3000;

app.get("/home", (req, res) => {
  return res.send("Home screen");
});

app.listen(port, () => {
  console.log(`Server listening on port $(port)`);
});

console.log("Hello World!!");