import dotenv from "dotenv";
dotenv.config();
import "./db/connectToDB";
import express from "express";
import router from "./routes/customers";
import cors from "cors";
import bodyParser from "body-parser";

const port = process.env.PORT || 9000;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: "*",
  })
);

app.use("/", router);

app.listen(port, () =>
  console.log(`app is listening on port ${process.env.PORT}`)
);
