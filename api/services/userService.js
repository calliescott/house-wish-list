const { model: User } = require("../models/userModel.js");

exports.findUserById = async (id) => {
  try {
    const user = await User.findById(id);
    if (user) {
      return user;
    } else {
      throw new Error("bad data");
    }
  } catch (err) {
    // If we're just throwing the error inside the catch, we can just not use a try/catch
    // It will achieve the same thing, but be easier to read and reason about
    throw err;
  }
};

exports.createUSer = async (email, password) => {

};

exports.loginUser = async (email, password) => {
  try {
    const [user] = await User.find({ email });
    console.log("found user:", user);
    if (user) {
      const match = await user.comparePassword(password);
      if (match) {
        return user;
      }
    } return null;
  } catch (err) {
    throw err;
  }
}