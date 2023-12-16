const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userlist = require("./model/userSchema");
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect(
    "mongodb+srv://rakib-siddiki:rakib-siddiki@cluster0.bj8fekt.mongodb.net/users?retryWrites=true&w=majority"
  )
  .then(console.log("connected"));
const users = [
  {
    fname: "Kyle",
    lname: "Hines",
    email: "nad@lagi.net",
    password: "1234",
  },
  {
    fname: "Alma",
    lname: "Leonard",
    email: "muli@cib.bh",
    password: "1234",
  },
  {
    fname: "Herbert",
    lname: "Murphy",
    email: "lap@gef.co",
    password: "1234",
  },
];
app.listen(port, console.log("this port is runnig"));

app.get("/users", function (req, res) {
  res.send(users);
});
app.post("/users", function (req, res) {
  const { fName, lName, email, password } = req.body;
  const newUsers = new userlist({
    fName,
    lName,
    email,
    password,
  });
  newUsers.save();
  req.send(req.body)
});
