require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/dynamic-chat-app");

const app = require("express")();

const http = require("http").Server(app);

http.listen(300, () => {
  console.log("Server is Running");
});
