const express = require("express");
const app = express();
const mongoose = require("mongoose")
const User = require("../model")
require("../db")



app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs")


app.get("/", (req, res) => {
    res.render("home")
});

app.post("/login", async (req, res) => {
  const igData = new User({
    // const data = await req.body;
    username:req.body.username,
    password:req.body.password,
  })
  const loggedin =  await igData.save();
  // res.redirect("/")
  res.render("index2")

});

app.listen(3000, () => {
  console.log(` listening to server 3000`);
});
