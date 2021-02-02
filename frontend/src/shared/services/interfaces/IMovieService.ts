import {
  IMovieDetail,
  IMovieResponse,
  IMoviesFilter,
} from '../../models/IMovie';

export interface IMovieService {
  listMovies: (filters: IMoviesFilter) => Promise<IMovieResponse>;
  getMovie: (imdbID: string) => Promise<IMovieDetail>;
}
