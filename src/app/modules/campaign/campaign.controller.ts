import { Request, Response } from 'express';
import { CampaignServices } from './campaign.service';
import campaignValidationSchema from './campaign.validation';

const createCampaign = async (req: Request, res: Response): Promise<void> => {
  try {
    const campaignData = req.body;

    const zodParsedData = campaignValidationSchema.parse(campaignData);

    const result = await CampaignServices.createCampaignInDB(zodParsedData);

    res.status(201).json({
      success: true,
      message: 'Campaign created successfully',
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

const getCampaigns = async (req: Request, res: Response): Promise<void> => {
  try {
    const campaigns = await CampaignServices.getAllCampaignsFromDB();

    res.status(200).json({
      success: true,
      message: 'Campaigns fetched successfully',
      data: campaigns,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const getSingleCampaign = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;

    const campaign = await CampaignServices.getCampaignFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Campaign fetched successfully',
      data: campaign,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

export const CampaignControllers = {
  createCampaign,
  getCampaigns,
  getSingleCampaign,
};
