const jwt = require("jsonwebtoken");
const SECRET = process.env.BOOK_CLUB || 'super-super-secret-password';

exports.issueToken = (user) => {
  const { _id: id } = user;

  const payload = {
    user: { id }
  }

  return jwt.sign(payload, SECRET);
}

exports.verify = token => jwt.verify(token, SECRET);