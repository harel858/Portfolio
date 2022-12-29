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
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: `${process.env.CLIENT}`,
}));
app.use("/", customers_1.default);
app.listen(process.env.PORT, () => console.log(`app is listening on port ${process.env.PORT}`));
