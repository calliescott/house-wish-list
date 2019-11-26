const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const userSchema = exports.Schema = new Schema({
  email: {
    type: String,
    unique: true, 
    required: true
  },
  password: {
    type: String,
    require: true
  }
});

userSchema.methods.comparePassword = function compare (password) {
  return bcrypt.compare(password, this.password);
}

userSchema.pre('save', async function (next) {
  const user = this;

  if() {
    try {
      const hash = await bcrypt..hash(user.password, 16);
      user.password = hash;
      return next();
    } catch (err) {
      return next(err);
    }
  } else {
    return next();
  }
});


const User = exports.model = mongoose.model('User', userSchema);