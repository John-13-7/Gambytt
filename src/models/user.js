const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  email: String,
  wallet: Number,
});

const User = mongoose.model("User", UserSchema, "Users");
module.exports = User;
