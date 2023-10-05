import { RequestHandler } from "express";

export const getAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const users: object[] = [];
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getUser: RequestHandler = async (req, res, next) => {
  try {
    const user: object = {};
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user: object = {};
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const user: object = {};
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const user: object = {};
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
