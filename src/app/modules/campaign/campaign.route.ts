import express from 'express';
import { CampaignControllers } from './campaign.controller';

const router = express.Router();

router.get('/', CampaignControllers.getCampaigns);
router.post('/create-campaign', CampaignControllers.createCampaign);
router.get('/:id', CampaignControllers.getSingleCampaign);

export const CampaignRoutes = router;
