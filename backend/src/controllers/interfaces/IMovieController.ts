import { IMovie } from '../../models/domain/IMovie';
import { IMovieResponse } from '../../models/domain/IMovieResponse';

export interface IMovieController {
  index: () => IMovieResponse;
  get: () => IMovie;
}
