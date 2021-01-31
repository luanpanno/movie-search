import { Request, Response } from 'express';
import MovieService from '../services/MovieService';
// import { IMovieController } from './interfaces/IMovieController';

class MovieController {
  async index(req: Request, res: Response) {
    const { title } = req.query;

    const index = new MovieService();
    const data = await index.index(String(title));

    return res.json(data);
  }

  async get(req: Request, res: Response) {
    const { params } = req;

    const index = new MovieService();
    const data = await index.get(params.imdbID);

    return res.json(data);
  }
}

export default MovieController;
