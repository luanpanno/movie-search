import { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { IMovieDetail, IMovieResponse } from '../models/IMovie';
import { movieService } from '../services';

interface Context {
  movies: IMovieResponse;
  movie: IMovieDetail;
  listMovies: (title: string) => void;
  getMovie: (imdbID: string) => void;
  setMovie: (value: IMovieDetail) => void;
}

export const MovieContext = createContext<Context>({} as Context);

export const MovieProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<IMovieResponse>();
  const [movie, setMovie] = useState<IMovieDetail>();

  const listMovies = useCallback(async (title: string) => {
    try {
      const response = await movieService.listMovies(title);

      setMovies(response);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  const getMovie = useCallback(async (imdbID: string) => {
    try {
      const response = await movieService.getMovie(imdbID);

      setMovie(response);
    } catch (error) {
      toast.error(error.message);
    }
  }, []);

  return (
    <MovieContext.Provider
      value={{ movies, movie, setMovie, listMovies, getMovie }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default function useMovie() {
  return useContext(MovieContext);
}
