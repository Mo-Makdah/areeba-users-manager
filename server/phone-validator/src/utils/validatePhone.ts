import { phone as validatePhone } from "phone";

export const validatePhoneNumber = (phoneNumber: string) => {
  const phone = validatePhone(phoneNumber);
  if (!phone.isValid) throw new Error("Invalid phone number");
  return phoneNumber;
};
