const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const AuthRouter = require("./Routes/AuthRouter");

require("dotenv").config();
const connectDB = require("./Models/db");

const Port = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173", // 👈 FRONTEND
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  }),
);

app.use("/auth", AuthRouter);

app.listen(Port, (req, res) => {
  console.log("server is listening on port 8080");
});
