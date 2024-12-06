import { Schema, model } from 'mongoose';
import { Campaign } from './campaign.interface';

const campaignSchema = new Schema<Campaign>({
  campaignName: { type: String, required: true },
  campaignDescription: { type: String, required: true },
  targetAmount: { type: Number, required: true },
  collectedAmount: { type: Number },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  campaignImage: { type: String, required: true },
  campaignCategory: { type: String, required: true },
  campaignLocation: { type: String, required: true },
  minimumDonation: { type: Number, required: true },
});

export const CampaignModel = model<Campaign>('Campaign', campaignSchema);
