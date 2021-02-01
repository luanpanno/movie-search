import { AxiosInstance } from 'axios';

import { IMovieDetail, IMovieResponse } from '../models/IMovie';
import { IMovieService } from './interfaces/IMovieService';

class MovieService implements IMovieService {
  constructor(private api: AxiosInstance) {}

  private ENDPOINT = '/api/v1/movies';

  async listMovies(title: string) {
    const params = {
      title,
    };

    const { data } = await this.api.get<IMovieResponse>(`${this.ENDPOINT}`, {
      params,
    });

    return data;
  }

  async getMovie(imdbID: string) {
    const { data } = await this.api.get<IMovieDetail>(
      `${this.ENDPOINT}/${imdbID}`
    );

    return data;
  }
}

export default MovieService;
