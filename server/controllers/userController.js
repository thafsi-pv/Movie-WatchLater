const { response } = require("express");
const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const { comparePassword, generatePasswordHash } = require("../utils/bcrypt");
const { generateAccessToken } = require("../utils/jwt");

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await userModel.findOne({ email });
    if (!isUserExist) {
      return res.status(400).json({ message: "Incorrect email/password" });
    }

    const validPassword = await comparePassword(password, isUserExist.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    //generate access token
    const accesstoken = generateAccessToken(isUserExist._id);
    return res.status(200).json({ message: "Login success", accesstoken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      res
        .status(400)
        .json({ message: "This email address has already been registered!." });
      return;
    }

    const hash = await generatePasswordHash(password);
    const newUser = await userModel.create({ ...req.body, password: hash });
    res.json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const watchlater1 = async (req, res) => {
  try {
    console.log(
      "🚀 ~ file: userController.js:50 ~ watchlater ~ req.userId:",
      req.userId
    );
    var watchList = await userModel
      .find({ _id: req.userId })
      .select("movies")
      .populate("movies");
    //await watchList.populate({ path: "movies", model: "movies" });
    console.log(
      "🚀 ~ file: userController.js:55 ~ watchlater ~ watchList:",
      watchList
    );

    res.json(watchList);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const addtoWathclater = async (req, res) => {
  console.log(
    "🚀 ~ file: userController.js:57 ~ addtoWathclater ~ req:",
    req.body
  );
  const userId = req.userId;
  const newList = await userModel.findByIdAndUpdate(
    userId,
    {
      $push: { movies: req.body.movieid },
    },
    { new: true }
  );

  res.json(newList);
};

module.exports = { signIn, signup, watchlater1, addtoWathclater };
