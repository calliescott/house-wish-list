const jwt = require('jsonwebtoken');

const SECRET = "mumble jumble secret ticket";

const issueToken = (user) => {
  const {_id: id } = user;

  const payload = {
    user: { id }
  };

  const token = jwt.sign(payload, SECRET);
  return token;
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET);
  } catch (err) {
    console.error(err.message);
    return false;
  }
}