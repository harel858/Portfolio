import { RequestHandler } from "express";
import { User } from "../models/registerUser";
import controllers from "../controllers/createCustomer";
import { validateUser } from "../validators/validator";

export const registerHandler: RequestHandler = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const inUse = await controllers.getUserByEmail(email);

    if (inUse) return res.status(400).json("Email in use");

    const { error } = validateUser({
      name,
      email,
      message,
    });

    if (error) {
      const err = error.details[0].message;
      console.log(err);

      return res.status(400).json(err);
    }

    let user = new User(name, email, message);
    console.log(user);

    let newUser = await controllers.createCustomer(user);
    if (!newUser) {
      return res.status(500).json("error occurs");
    }

    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
