const userRouter = express.Router();

userRouter.route('/')
  .post( async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = new UserModel({ email, password });
      const doc = await user.save();
      res.status(201).json(doc);
    } catch (err) {
      next(err);
    }
});

userRouter.route('/login')
  .post(async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({email});

      if (user) {
        const match = await user.comparePassword(password);
        if (match) {
          const token = issueToken(user);
          res.json({
            access_token: token,
            refresh_token: null,
            refresh: '/api/users/login/refresh'
          })
        } else {
          res.status(401).send()
        }
      } else {
        res.status(404).send()
      }
    } catch (err) {
      next(err);
    }
  });

userRouter.route('/user')
  .get(async (req, res, next) => {
    console.log("req.user", req.user);
    if (req.user) {
      res.json(req.user);
    } else {
      res.status(404).send()
    }
  });