import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import { CampaignRoutes } from './app/modules/campaign/campaign.route';
import { DonationRoutes } from './app/modules/donation/donation.route';

// express
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/campaigns', CampaignRoutes);
app.use('/api/v1/donations', DonationRoutes);
app.use('/api/v1/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Green Charity Club Server!');
});

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

export default app;
