const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String, 
    unique: true,
    required: true

  },
  password: {
    type: String,
    required: true
  }
});

//encrypt the password before saving in to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if(user.isModified("password") || user.isNew) {
    try {
      const hash = await bcrypt.hash(user.password, 10);
      user.password = hash;
      return next();
    } catch(err) {
      return next(err);
    }
  } else {
    return next()
  }
});

userSchema.method("comparePassowrd", function (password) {
  return bcrypt.compare(password, this.password);
});

exports.model = mongoose.model("User", userSchema);