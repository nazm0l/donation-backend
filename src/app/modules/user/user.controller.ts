import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userValidationSchema from './user.validation';

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.body;

    const zodParsedData = userValidationSchema.parse(user);

    const result = await UserServices.createUserIntoDB(zodParsedData);

    // return response
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await UserServices.getLoginUserFromDB(email, password);

    // return response
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: user,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await UserServices.getAllUsersFromDB();

    // return response
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: users,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const getSingleUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const user = await UserServices.getUserFromDB(id);

    // return response
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: user,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

export const UserControllers = {
  getUsers,
  loginUser,
  createUser,
  getSingleUser,
};
