import { Request, Response } from 'express';
import { DonationServices } from './donation.service';
import donationValidationSchema from './donation.validation';

const createDonation = async (req: Request, res: Response): Promise<void> => {
  try {
    const donation = req.body;

    // Validate the donation data
    const zodParsedData = donationValidationSchema.parse(donation);

    // Call the service to save the donation in the database
    const result = await DonationServices.createDonationInDB(zodParsedData);

    res.status(201).json({
      success: true,
      message: 'Donation made successfully',
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

const getDonations = async (req: Request, res: Response): Promise<void> => {
  try {
    const donations = await DonationServices.getAllDonationsFromDB();

    res.status(200).json({
      success: true,
      message: 'Donations fetched successfully',
      data: donations,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const getDonationsByCampaign = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const campaignId = req.params.campaignId;
    const donations = await DonationServices.getDonationsByCampaign(campaignId);

    res.status(200).json({
      success: true,
      message: 'Donations fetched successfully',
      data: donations,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const getDonationsByUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userId = req.params.userId;
    const donations = await DonationServices.getDonationsByUser(userId);

    res.status(200).json({
      success: true,
      message: 'User donations fetched successfully',
      data: donations,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

export const DonationControllers = {
  createDonation,
  getDonations,
  getDonationsByCampaign,
  getDonationsByUser,
};
