import { phone as validatePhone } from "phone";

export const validatePhoneNumber = (phoneNumber: string) => {
  const formattedPhoneNumber =
    phoneNumber.includes("+") || phoneNumber.includes("00")
      ? phoneNumber
      : `+${phoneNumber}`;

  console.log(formattedPhoneNumber);
  const phone = validatePhone(formattedPhoneNumber, {
    validateMobilePrefix: false,
  });

  if (!phone.isValid) throw new Error("Invalid phone number");
  return phone;
};
