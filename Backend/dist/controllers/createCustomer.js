"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerModel_1 = __importDefault(require("../db/customerModel"));
const createCustomer = async (newUser) => {
    try {
        if (isValid(newUser)) {
            const user = new customerModel_1.default(newUser);
            await user.save();
            return user;
        }
    }
    catch (err) {
        console.log(err);
        return null;
    }
};
function isValid(newUser) {
    if (newUser !== null && typeof newUser === "object") {
        return true;
    }
    return false;
}
async function getUserByEmail(email) {
    try {
        return await customerModel_1.default.findOne({ email: email });
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
exports.default = { createCustomer, getUserByEmail };
