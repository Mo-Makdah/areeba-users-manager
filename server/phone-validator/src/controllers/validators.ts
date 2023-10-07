import { RequestHandler } from "express";

export const validatePhoneNumber: RequestHandler = async (req, res, next) => {
  try {
    const phoneNumber: object = {};
    res.status(200).json(phoneNumber);
  } catch (error) {
    next(error);
  }
};
