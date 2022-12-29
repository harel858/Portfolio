import RegisterModel from "../db/customerModel";
import { User } from "../models/registerUser";

const createCustomer = async (newUser: unknown) => {
  try {
    if (isValid(newUser)) {
      const user = new RegisterModel(newUser);
      await user.save();
      return user;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

function isValid(newUser: unknown): newUser is User {
  if (newUser !== null && typeof newUser === "object") {
    return true;
  }
  return false;
}

async function getUserByEmail(email: string) {
  try {
    return await RegisterModel.findOne({ email: email });
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default { createCustomer, getUserByEmail };
