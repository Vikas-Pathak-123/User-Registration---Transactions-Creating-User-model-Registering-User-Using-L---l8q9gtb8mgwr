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
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.status(200).json({ _id: user._id });
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate email error
        res.status(404).json('User validation failed: email: Email already exists');
      } else {
        res.status(404).json('User validation failed: email: Email already exists');
      }
    }
  };

module.exports = { registerUser };