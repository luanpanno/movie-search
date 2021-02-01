import { IMovieDetail, IMovieResponse } from '../../models/IMovie';

export interface IMovieService {
  listMovies: (query: string) => Promise<IMovieResponse>;
  getMovie: (imdbID: string) => Promise<IMovieDetail>;
}
