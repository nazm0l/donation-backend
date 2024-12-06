import { z } from 'zod';

const userValidationSchema = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  password: z.string().min(6).max(255),
  address: z.string().min(1).max(255),
  image: z.string(),
  role: z.enum(['admin', 'user']),
  isActive: z.boolean(),
});

export default userValidationSchema;
