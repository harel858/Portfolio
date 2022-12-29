import client from "@sendgrid/mail";
import { RequestHandler } from "express";

const sendEmailHandler: RequestHandler = (req, res, next) => {
  const { name, email } = req.body as {
    name: string;
    email: string;
    message: string;
  };
  console.log(name, email);

  client.setApiKey(
    `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`
  );
  const msg = {
    to: `${email}`, // Change to your recipient
    from: `harellevi85@gmail.com`, // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  client
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
export default sendEmailHandler;
