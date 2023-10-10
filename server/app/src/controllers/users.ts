import { RequestHandler } from "express";
import { validateUserFields } from "../utils/validateUserFields";
import UserModel from "../models/user";
import { validatePhoneNumber } from "../utils/validatePhoneNumber";

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const params = req.params;
    const userId = params.id;

    if (!userId) {
      throw new Error("User id is required");
    }

    const user = await UserModel.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const body = req.body;
    const validateUser = validateUserFields(body);
    if (validateUser) {
      throw new Error(validateUser);
    }

    const phoneNumber = await validatePhoneNumber(body.phoneNumber);

    if (!phoneNumber) {
      throw new Error("Invalid phone number");
    }

    const createdAt = new Date();

    const user = await UserModel.create({
      ...body,
      createdAt,
      phoneNumber: phoneNumber.phoneNumber,
    });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const params = req.params;
    const userId = params.id;
    const body = req.body;
    const validateUser = validateUserFields(body);
    if (validateUser) {
      throw new Error(validateUser);
    }

    const phoneNumber = await validatePhoneNumber(body.phoneNumber);

    if (!phoneNumber) {
      throw new Error("Invalid phone number");
    }

    const user = await UserModel.findByIdAndUpdate(
      userId,
      {
        ...body,
        phoneNumber: phoneNumber.phoneNumber,
      },
      { new: true },
    );

    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const params = req.params;
    const userId = params.id;

    if (!userId) {
      throw new Error("User id is required");
    }

    const user = await UserModel.findByIdAndDelete(userId);

    if (!user) {
      throw new Error("User not found");
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
