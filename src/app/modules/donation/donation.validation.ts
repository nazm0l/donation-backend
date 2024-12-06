import { z } from 'zod';

const donationValidationSchema = z.object({
  userId: z.string(),
  campaignId: z.string(),
  amount: z.number().positive().min(1),
  isAnonymous: z.boolean().optional(),
});

export default donationValidationSchema;
