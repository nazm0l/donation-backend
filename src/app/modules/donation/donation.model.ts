import { Schema, model } from 'mongoose';
import { Donation } from './donation.interface';

const donationSchema = new Schema<Donation>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    campaignId: {
      type: Schema.Types.ObjectId,
      ref: 'Campaign',
      required: true,
    },
    amount: { type: Number, required: true },
    isAnonymous: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const DonationModel = model<Donation>('Donation', donationSchema);
