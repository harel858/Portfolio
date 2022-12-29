"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerHandler_1 = require("../handlers/registerHandler");
/* import sendEmailHandler from "../middleware/sendEmailHandler"; */
const router = (0, express_1.Router)();
router.post("/", /*  sendEmailHandler, */ registerHandler_1.registerHandler);
exports.default = router;
