const express = require("express");
const mongoose = require("./schemas");
const app = express();

app.set("port", process.env.PORT || 5147);

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(app.get("port"), () => {
  mongoose();
  console.log(`server is running at http://localhost:${app.get("port")}`);
});
