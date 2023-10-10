import { RequestHandler } from "express";

import { validatePhoneNumber } from "../utils/validatePhone";

export const validatePhone: RequestHandler = async (req, res, next) => {
  try {
    const queryParams = req.query;
    const phoneNumber = queryParams.phone;

    if (!phoneNumber) {
      throw new Error("Phone number is required");
    }

    const validatedPhoneNumber = validatePhoneNumber(phoneNumber.toString());
    res.status(200).json(validatedPhoneNumber);
  } catch (error) {
    next(error);
  }
};
