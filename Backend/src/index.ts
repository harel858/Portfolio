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
    origin: `*`,
  })
);

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://portfolio-six-pi-55.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, HEAD");
  next();
});

app.use("/", router);

app.listen(port, () =>
  console.log(`app is listening on port ${process.env.PORT}`)
);
