exports.MONGODB_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
exports.URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/houselist'
exports.PORT = process.env.PORT || 4000
exports.SECRET = process.env.SECRET || 'super-secret-passphrase'