const express = require("express");
const app = express();
const path = require("path");

const PORT = 3333; // 65K
// CRIAÇÃO DAS ROTAS  - UTILIZAR O MIDDLEWARE
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/views/index.html");
});

app.get("/sobre", function (req, res) {
  res.sendFile(__dirname + "/src/views/about.html");
});
app.get("/contato", function (req, res) {
  res.sendFile(__dirname + "/src/views/contato.html");
});

app.get("/logar", function (req, res) {
  res.sendFile(__dirname + "/src/views/logar.html");
});

// CRIAR ROTA 404 (MIDDLEWARE)
app.use(function (req, res) {
  res.status(404).sendFile(__dirname + "/src/views/404.html");
});

app.listen(PORT, () => {
  console.log("running...! " + PORT);
});
