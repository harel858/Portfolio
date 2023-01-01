"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHandler = void 0;
const registerUser_1 = require("../models/registerUser");
const createCustomer_1 = __importDefault(require("../controllers/createCustomer"));
const validator_1 = require("../validators/validator");
const registerHandler = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const inUse = await createCustomer_1.default.getUserByEmail(email);
        if (inUse)
            return res.status(400).json("Email in use");
        const { error } = (0, validator_1.validateUser)({
            name,
            email,
            message,
        });
        if (error) {
            const err = error.details[0].message;
            console.log(err);
            return res.status(400).json(err);
        }
        let user = new registerUser_1.User(name, email, message);
        console.log(user);
        let newUser = await createCustomer_1.default.createCustomer(user);
        if (!newUser) {
            return res.status(500).json("error occurs");
        }
        return res.status(204).end();
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
exports.registerHandler = registerHandler;
