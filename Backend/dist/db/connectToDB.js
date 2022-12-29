"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const mongoose_1 = __importDefault(require("mongoose"));
console.log(process.env.MONGO_URI);
mongoose_1.default
    .connect(`${process.env.MONGO_URI}`)
    .then((x) => console.log(`connect to DB`))
    .catch((e) => console.log(e));
