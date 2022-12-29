import Joi from "joi";
import { User } from "../models/registerUser";

const schema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  message: Joi.any(),
});

export function validateUser(user: User) {
  return schema.validate(user);
}
