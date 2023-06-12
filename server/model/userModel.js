const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    //movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "movies" }],
    moviez: [{ type: mongoose.Schema.Types.ObjectId, ref: "movies" }],
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("user", userSchema);
