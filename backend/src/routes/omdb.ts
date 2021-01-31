import dotenv from 'dotenv';
import { Router } from 'express';
import MovieController from '../controllers/MovieController';

dotenv.config();

const omdb = Router();

omdb.get('/api/v1/movies/', async (req, res) => {
  const controller = new MovieController();
  return controller.index(req, res);
});

omdb.get('/api/v1/movies/:imdbID', async (req, res) => {
  const controller = new MovieController();
  return controller.get(req, res);
});

export default omdb;
