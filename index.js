const express = require("express");

const { connectMongoDb } = require("./connection");
const userRouter = require("./routes/user");

const { logReqRes } = require("./middleware/index");

const app = express();
const port = 5000;

connectMongoDb("mongodb://localhost:27017/node").then(() =>
  console.log("mongo connected")
);

app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

app.use("/api/users", userRouter);

// middleware

app.listen(port, () => {
  console.log(`server starting at ${port}`);
});
