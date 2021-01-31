import axios from 'axios';
import dotenv from 'dotenv';
import { IMovieService } from './interfaces/IMovieService';

dotenv.config();

const ENDPOINT = `http://www.omdbapi.com/?apikey=${process.env.OMDB_KEY}`;

class MovieService implements IMovieService {
  async index(title: string) {
    const { data } = await axios(`${ENDPOINT}&s=${title}`);

    return data;
  }

  async get(imdbID: string) {
    const { data } = await axios(`${ENDPOINT}&i=${imdbID}`);

    return data;
  }
}

export default MovieService;
