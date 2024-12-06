import express from 'express';
import { DonationControllers } from './donation.controller';

const router = express.Router();

router.get('/', DonationControllers.getDonations);
router.post('/create-donation', DonationControllers.createDonation);
router.get('/campaign/:campaignId', DonationControllers.getDonationsByCampaign);
router.get('/user/:userId', DonationControllers.getDonationsByUser);

export const DonationRoutes = router;
