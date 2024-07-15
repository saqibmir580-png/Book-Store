const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { authenticateToken } = require("./userAuth");

//signup function
router.post("/sign-up", async (req, res) => {
  try {
    const { username, email, password, address } = req.body;
    //check usename length is morethan 3
    if (username.length < 4) {
      return res.status(400).json({
        message: "Username length should be greater than 3",
      });
    }
    //check username is alreadyexit or not
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({
        message: "Username is already exists",
      });
    }
    //check for email is exit or not
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "Email is already exists",
      });
    }
    //check for password length should greater than 6
    if (password.length < 4) {
      return res.status(400).json({
        message: "Passwordlength should be greater than 5",
      });
    }
    //hash the password
    const hashpass = await bcrypt.hash(password, 10);
    //after these conditions we create a new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashpass,
      address: address,
    });
    await newUser.save();
    return res.status(200).json({
      message: "SignUp Successfully!!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal serverw error",
    });
  }
});

// Sign in route
router.post("/sign-in", async (req, res) => {
  try {
    const { username, password } = req.body;

    //find the existinguser
    const existinguser = await User.findOne({ username });
    if (!existinguser) {
      res.status(400).json({ message: "Invalid Credentials" });
    }
    //compare the password=(enter by user) with existinguser.password=(this password available in databse)
    await bcrypt.compare(password, existinguser.password, (err, data) => {
      if (data) {
        const authClaim = [
          { name: existinguser.username },
          { role: existinguser.role },
        ];
        const token = jwt.sign({ authClaim }, "bookStore123", {
          expiresIn: "30d",
        });
        res
          .status(200)
          .json({ id: existinguser._id, role: existinguser.role, token });
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
//get user information
router.get("/get-user-information", authenticateToken, async (req, res) => {
  try {
    //first user is available is are not-
    const { id } = req.headers;
    const data = await User.findById(id).select("-password");
    return res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
//update address
router.put("/update-address", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const { address } = req.body;
    await User.findByIdAndUpdate(id, { address: address });
    return res.status(200).json({ message: "Address Updated Successfully!!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
