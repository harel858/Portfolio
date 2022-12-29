import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  name: String,
  email: String,
  message: String || null,
});

const RegisterModel = mongoose.model("customer", Schema);

export default RegisterModel;
