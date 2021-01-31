import { Router } from 'express';
import omdb from './omdb';

const router = Router();

router.use(omdb);

router.get('/api/v1', (req, res) =>
  res.send('Movie Search API V1 using OMDB by Luan Panno'),
);

export default router;
