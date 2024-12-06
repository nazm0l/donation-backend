import { Donation } from './donation.interface';
import { DonationModel } from './donation.model';

const createDonationInDB = async (donation: Donation) => {
  const newDonation = new DonationModel(donation);
  const result = await newDonation.save();
  return result;
};

const getAllDonationsFromDB = async () => {
  const donations = await DonationModel.find();
  return donations;
};

const getDonationsByCampaign = async (campaignId: string) => {
  const donations = await DonationModel.find({ campaignId });
  return donations;
};

const getDonationsByUser = async (userId: string) => {
  const donations = await DonationModel.find({ userId });
  return donations;
};

export const DonationServices = {
  createDonationInDB,
  getDonationsByCampaign,
  getDonationsByUser,
  getAllDonationsFromDB,
};
