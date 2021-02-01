import api from './api';
import { IMovieService } from './interfaces/IMovieService';
import MovieService from './MovieService';

export const movieService: IMovieService = new MovieService(api);
