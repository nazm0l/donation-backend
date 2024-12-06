export type Donation = {
  userId: string; // Reference to the user making the donation
  campaignId: string; // Reference to the campaign being supported
  amount: number; // The donation amount
  isAnonymous: boolean; // Whether the donation is anonymous
};
