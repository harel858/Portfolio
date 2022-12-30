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
app.use(
  cors({
    allowedHeaders: ["Content-Type"],
    origin: `${process.env.CLIENT}`,
  })
);
app.use("/", router);

app.listen(port, () =>
  console.log(`app is listening on port ${process.env.PORT}`)
);
