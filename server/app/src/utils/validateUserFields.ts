import { UserType } from "../models/user";

export const validateUserFields = (user: UserType) => {
  const { firstName, lastName, username, phoneNumber, address } = user;
  if (!firstName) return "First name is required";
  if (!lastName) return "Last name is required";
  if (!username) return "Username is required";
  if (!phoneNumber) return "Phone number is required";
  if (!address) return "Address is required";

  return null;
};
