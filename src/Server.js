const express = require("express");
const app = express();
//const port = process.env.PORT || 5000;
app.use(express.json());
const mongoose = require("mongoose");
const User = require("./models/user"); //schema of all the users
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

//So it can run locally
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // change this when i deploy
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS, PATCH"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true"); //for tokens

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

//connect to mongoose server
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//for the tokens whenever the user thats logged in to access something
function authenticateToken(req, res, next) {
  const token = req.cookies.jwt;
  if (token == null) return res.sendStatus(401); // if there isn't any token

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next(); // pass the execution off to whatever request the client intended
  });
}

//login
app.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  console.log("back end username: ", req.body.username);
  if (user === null) {
    return res.status(400).send("Cannot find user: " + req.body.username);
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1hr" }
      );

      // Set JWT as a HTTP-only cookie
      res.cookie("jwt", accessToken, { httpOnly: true, secure: false }); // secure should be set to true if using https
      res.status(200).json({ success: true });
    } else {
      res.send("Not Allowed");
    }
  } catch {
    res.status(500).send();
  }
});

//register
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

//logout
app.post("/logout", (req, res) => {
  res.clearCookie("jwt");
  res.status(200).send("User logged out");
});

//update wallet
app.patch("/update_balance", authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ username: req.user.username });
    //user not found
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    //user is found
    const update_balance = Number(req.body.update);
    user.wallet += update_balance;

    const update_user = await user.save();
    res.json(update_user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
