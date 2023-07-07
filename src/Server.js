const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
const mongoose = require("mongoose");
const User = require("./models/user"); //schema of all the users
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const cookieParser = require("cookie-parser");
//app.use(cookieParser());
//So it can run locally
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

//connect to mongoose server
mongoose
  .connect(
    "mongodb+srv://manguini:6jWkLNl7DNbBiCC0@fitnessapp.uvbptei.mongodb.net/Gambytt",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  //user is not found
  if (user === null) {
    return res.status(400).send("Cannot find user: ", req.body.username);
  }
  //user is found, check if passwords match
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      // Create a JWT token
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({ accessToken: accessToken });
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

app.post("/register", async (req, res) => {
  const userExists = await User.findOne({ username: req.body.username });
  if (userExists) {
    console.log("User exists: ", userExists);
    return res.status(400).send("User already exists");
  }
  try {
    const hashedPW = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      password: hashedPW,
      email: req.body.email,
      wallet: req.body.wallet,
    });
    console.log("user: ", user);
    const newUser = await user.save();
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
