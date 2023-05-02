const users   =require("../models/user.js");

/*
Post request json file structure


    obj =  {
        "name":name,
        "email":email,
        "password": password
    }

 */

//You need to complete the route of user register
//you need to register the user and return the id assign to the user.
//you will get error if user mail allready exist in that case you need to return 404 status with err message that you get.
//to look the user schema look ../models/user.js


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      // Check if user with same email already exists
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(404).json({ error: "User with this email already exists" });
      }
  
      // Create new user
      const user = new User({ name, email, password });
      const savedUser = await user.save();
      res.json({ id: savedUser._id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports = { registerUser };