"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerHandler_1 = require("../handlers/registerHandler");
const sendEmailHandler_1 = __importDefault(require("../middleware/sendEmailHandler"));
const router = (0, express_1.Router)();
router.post("/", sendEmailHandler_1.default, registerHandler_1.registerHandler);
exports.default = router;
