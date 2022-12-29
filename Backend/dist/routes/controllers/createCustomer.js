"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerModel_1 = __importDefault(require("../../db/customerModel"));
const createCustomer = async (details) => {
    try {
        if (isValid(details)) {
            const user = new customerModel_1.default(details);
            await user.save();
            return user;
        }
    }
    catch (err) {
        console.log(err);
        return null;
    }
};
function isValid(details) {
    if (details !== null && typeof details === "object") {
        return true;
    }
    return false;
}
exports.default = { createCustomer };
