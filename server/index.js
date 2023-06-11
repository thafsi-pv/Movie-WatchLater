const express = require("express");
const cors = require("cors");
const connectDb = require("./config/db");
const userRouter = require("./router/user");
require("dotenv").config();

const app = express();
app.use(cors());
connectDb();
app.use(express.json());

app.use("/api/user", userRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("server started at port:" + PORT);
});
