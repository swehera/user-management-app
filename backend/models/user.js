const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  subscription: {
    type: String,
    default: "premium",
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
