const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movies" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
