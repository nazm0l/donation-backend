import bcrypt from 'bcrypt';
import { User } from './user.interface';
import { UserModel } from './user.model';

const SALT_ROUNDS = 10;

const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

const comparePassword = async (
  inputPassword: string,
  storedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(inputPassword, storedPassword);
};

const createUserIntoDB = async (user: User) => {
  user.password = await hashPassword(user.password); // Hash the password
  const newUser = new UserModel(user);
  const result = await newUser.save();
  return result;
};

const getLoginUserFromDB = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email }); // Find user by email
  if (!user) {
    throw new Error('Invalid credentials');
  }
  const passwordCheck = await comparePassword(password, user.password);
  if (!passwordCheck) {
    throw new Error('Invalid credentials');
  }
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    image: user.image,
    role: user.role,
  };
};

const getAllUsersFromDB = async () => {
  const users = await UserModel.find().select('-password'); // Await the find() method
  return users;
};

const getUserFromDB = async (id: string) => {
  const user = await UserModel.findById(id).select('-password');
  return user;
};

const updateUserInDB = async (email: string, user: User) => {};

const deleteUserFromDB = async (email: string) => {};

export const UserServices = {
  getAllUsersFromDB,
  getUserFromDB,
  createUserIntoDB,
  getLoginUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
};
