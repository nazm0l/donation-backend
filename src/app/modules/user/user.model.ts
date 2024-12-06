import { Schema, model } from 'mongoose';
import { User } from './user.interface';

const userSchema = new Schema<User>(
  {
    name: { type: String, required: true },
    phone: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String },
    image: { type: String },
    role: { type: String, enum: ['admin', 'user'], required: true },
    isActive: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const UserModel = model<User>('User', userSchema);
