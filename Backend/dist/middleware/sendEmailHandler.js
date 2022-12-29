"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mail_1 = __importDefault(require("@sendgrid/mail"));
const sendEmailHandler = (req, res, next) => {
    const { name, email } = req.body;
    console.log(name, email);
    mail_1.default.setApiKey(`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`);
    const msg = {
        to: `${email}`,
        from: `harellevi85@gmail.com`,
        subject: "Sending with SendGrid is Fun",
        text: "and easy to do anywhere, even with Node.js",
        html: "<strong>and easy to do anywhere, even with Node.js</strong>",
    };
    mail_1.default
        .send(msg)
        .then((x) => {
        console.log(x);
        console.log(`email was send successfully`);
        next();
    })
        .catch((err) => {
        console.log(err);
        return res.status(400).send({ err });
    });
};
exports.default = sendEmailHandler;
