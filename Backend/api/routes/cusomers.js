"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registerHandler_1 = require("../handlers/registerHandler");
const router = (0, express_1.Router)();
router.post("/", registerHandler_1.registerHandler);
exports.default = router;
