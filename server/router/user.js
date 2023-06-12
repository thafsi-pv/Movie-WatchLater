const express = require("express");
const userRouter = express.Router();
const {
  signIn,
  signup,
  watchlater,
  addtoWathclater,
  watchlater1,
} = require("../controllers/userController");
const { checkAuth } = require("../middleware/checkAuth");

userRouter.post("/signIn", signIn);

userRouter.post("/signUp", signup);

userRouter.get("/watchlist1", checkAuth, watchlater1);

userRouter.post("/addwathclater", checkAuth, addtoWathclater);

module.exports = userRouter;
