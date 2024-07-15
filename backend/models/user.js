const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    default: "https://static.thenounproject.com/png/363640-200.png",
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  favourites: [
    {
      type: mongoose.Types.ObjectId,
      ref: "books",
    },
  ],
  cart: [
    {
      type: mongoose.Types.ObjectId,
      ref: "books",
    },
  ],
  orders: [
    {
      type: mongoose.Types.ObjectId,
      ref: "books",
    },
  ],

},{timestamps:true});
module.exports=mongoose.model("user",user);
