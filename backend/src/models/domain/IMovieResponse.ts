import { IMovie } from './IMovie';

export interface IMovieResponse {
  Search: IMovie[];
  totalResults: number;
  Response: boolean;
}
