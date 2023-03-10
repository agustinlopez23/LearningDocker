import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const User = mongoose.model(
  "User",
  new mongoose.Schema({
    tipo: String,
    status: String,
  })
);
const port = 3000;
const app = express();
dotenv.config();
mongoose
  .connect(
    "mongodb://mongotest:testingdocker@mongoWithNode:27017/dockertest?authSource=admin"
  )
  .then(message => console.log("Connected to db"))
  .catch(error => console.log(error));

app.get("/", async (req, res) => {
  User.find().then(users => {
    console.log("All Users:", users);
    const usersNameArray = [];
    users.map(user => usersNameArray.push(user.tipo));
    res.send(usersNameArray);
  });
});
app.get("/create", async (req, res) => {
  const number = Math.floor(Math.random() * 100);
  await User.create({
    tipo: `Person ${number.toString()}`,
    status: "Active",
  })
    .then(res => console.log("User Created:", res))
    .then(res.send("Created user succesfull"))
    .catch(error => console.log(error));
});

app.get("/delete", async (req, res) => {
  User.deleteMany().then(resp => {
    res.send(`DB restarted, ${resp.deletedCount} users deleted`);
    console.log("Users deleted:", resp.deletedCount);
  });
});
app.get("/*", async (req, res) => {
  return res.send("This route is wrong, try again").status(403);
});

app.listen(port, () => {
  console.log(`Server listen on ${port}`);
});
