const router = require("express").Router();
const User = require("../models/user");
const { authenticateToken } = require("./userAuth");
//put book to cart

router.put("/add-to-cart", authenticateToken, async (req, res) => {
  try {
    const { bookid, id } = req.headers;
    const userData = await User.findById(id);
    const isBookincart = userData.cart.includes(bookid);
    if (isBookincart) {
      return res.json({
        status: "Success",
        message: "Book is already in cart",
      });
    }
    await User.findByIdAndUpdate(id, { $push: { cart: bookid } });
    return res.status(200).json({
      message: "Book added to cart",
    });
  } catch (error) {
    return res.status(500).json({ message: "An error is occurred" });
  }
});

//delete from the cart
router.put(
  "/remove-from-cart/:bookid",
  authenticateToken,
  async (req, res) => {
    try {
      const { bookid } = req.params;
      const { id } = req.headers;
      await User.findByIdAndUpdate(id, { $pull: { cart: bookid } });

      return res.status(200).json({
        status: "Success",
        message: "Book removed from cart",
      });
    } catch (error) {
      res.status(500).json({ messsge: "An error occurred" });
    }
  }
);
//get cart of particular user
router.get("/get-user-cart",authenticateToken,async(req,res)=>{
  try {
    const {id}=req.headers;
    const userData=await User.findById(id).populate("cart");
    const cart=userData.cart.reverse();
    return res.json({
      status:"Success",
      data:cart,
    })
  } catch (error) {
    return res.status(500).json({message:"An error occurred"})
  }
});

module.exports = router;
