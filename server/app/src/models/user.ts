import mongoose, { InferSchemaType, model } from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

export type UserType = InferSchemaType<typeof userSchema>;

export default model<UserType>("User", userSchema);
