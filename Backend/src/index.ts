import dotenv from "dotenv";
dotenv.config();
import "./db/connectToDB";
import express, { json } from "express";
import router from "./routes/customers";
import cors from "cors";
/* import bodyParser from "body-parser"; */

const app = express();
app.use(
  cors({
    origin: `${process.env.CLIENT || process.env.HEBREWCLIENT}`,
    allowedHeaders: ["Content-Type"],
  })
);
const port = process.env.PORT || 5000;

app.use(json());

/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
 */

app.use("/", router);

app.listen(port, () =>
  console.log(`app is listening on port ${process.env.PORT}`)
);
