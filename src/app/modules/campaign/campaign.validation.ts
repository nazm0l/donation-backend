import { z } from 'zod';

const campaignValidationSchema = z.object({
  campaignName: z.string().min(1).max(255),
  campaignDescription: z.string().min(1).max(1000),
  targetAmount: z.number().positive(),
  collectedAmount: z.number().nonnegative().default(0), // Default value set to 0
  startDate: z.string(),
  endDate: z.string(),
  isActive: z.boolean(),
  campaignImage: z.string().url(),
  campaignCategory: z.string().min(1).max(255),
  campaignLocation: z.string().min(1).max(255),
  minimumDonation: z.number().positive(),
});

export default campaignValidationSchema;
