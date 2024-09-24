const express = require("express");
const app = express();

const PORT = 3333;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", (req, res) => {
  res.sendFile(__dirname + "/src/views/about.html");
});

app.use((req, res) => {
  res.status(500).sendFile(__dirname + "/src/views/notFound.html");
});

app.listen(PORT, () => {
  console.log("Listen at port " + PORT);
});
