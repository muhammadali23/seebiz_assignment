const express = require("express");
const path = require("path");
const app = express();
// const ejs = require("ejs");
app.set("view engine", "ejs");

app.get("/:name", (req, res) => {
  const name = req.params.name;
  // res.sendFile(path.join(__dirname, "./views/app.html"));
  // res.render("app");
  res.render("app", { name: name });
});
app.listen("7000", () => {
  console.log("server started");
});
