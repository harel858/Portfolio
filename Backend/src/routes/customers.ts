import { Router } from "express";
import { registerHandler } from "../handlers/registerHandler";
import sendEmailHandler from "../middleware/sendEmailHandler";

const router = Router();

router.post("/", sendEmailHandler, registerHandler);

export default router;
