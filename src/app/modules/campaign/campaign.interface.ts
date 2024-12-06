export type Campaign = {
  campaignName: string;
  campaignDescription: string;
  targetAmount: number;
  collectedAmount: number;
  startDate: string;
  endDate: string;
  campaignImage: string;
  campaignCategory: string;
  campaignLocation: string;
  minimumDonation: number;
  isActive: boolean;
};
