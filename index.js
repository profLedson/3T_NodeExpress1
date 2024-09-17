const express = require("express");
const app = express();

const PORT = 3333;

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/sobre", (req, res) => {
  res.send("Conheça nossa loja");
});
app.listen(PORT, () => {
  console.log("Listen at port " + PORT);
});
