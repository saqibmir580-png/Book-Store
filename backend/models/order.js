const mongoose = require("mongoose");

const order = new mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  book: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: mongoose.Types.ObjectId,
    default:"Order placed",
    enum:["Order Placed","Out for Delivery","Delivery"],
  },
},{timestamps:true});
module.exports=mongoose.model("order",order);
