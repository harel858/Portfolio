"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./db/connectToDB");
const express_1 = __importDefault(require("express"));
const customers_1 = __importDefault(require("./routes/customers"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = process.env.PORT || 9000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
/* app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});
 */
app.use((0, cors_1.default)({
    origin: `${process.env.CLIENT}`,
}));
app.use("/", customers_1.default);
app.listen(port, () => console.log(`app is listening on port ${process.env.PORT}`));
