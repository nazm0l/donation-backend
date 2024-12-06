import { Campaign } from './campaign.interface';
import { CampaignModel } from './campaign.model';

const createCampaignInDB = async (campaign: Campaign) => {
  const newCampaign = new CampaignModel(campaign);
  const result = await newCampaign.save();
  return result;
};

const getAllCampaignsFromDB = async () => {
  const campaigns = await CampaignModel.find();
  return campaigns;
};

const getCampaignFromDB = async (id: string) => {
  const campaign = await CampaignModel.findById(id);
  return campaign;
};

const updateCampaignInDB = async (
  id: string,
  updatedData: Partial<Campaign>
) => {
  const updatedCampaign = await CampaignModel.findByIdAndUpdate(
    id,
    updatedData,
    { new: true }
  );
  return updatedCampaign;
};

const deleteCampaignFromDB = async (id: string) => {
  const deletedCampaign = await CampaignModel.findByIdAndDelete(id);
  return deletedCampaign;
};

export const CampaignServices = {
  createCampaignInDB,
  getAllCampaignsFromDB,
  getCampaignFromDB,
  updateCampaignInDB,
  deleteCampaignFromDB,
};
