import { IMovie } from '../../models/domain/IMovie';

export interface IMovieService {
  index: (title: string) => Promise<IMovie[]>;
  get: (imdbID: string) => Promise<IMovie>;
}
