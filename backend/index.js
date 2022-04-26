import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import mongoose from "./schemas/index.js";
import User from "./schemas/user.js";

const app = express();

app.set("port", process.env.PORT || 5000);
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.post("/register", (req, res, next) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ sucess: false, err });
    return res.status(200).json({ sucess: true });
  });
});

app.listen(app.get("port"), () => {
  mongoose();
  console.log(`server is running at http://localhost:${app.get("port")}`);
});
