import { createContext, useCallback, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { IMovieDetail, IMovieResponse, IMoviesFilter } from '../models/IMovie';
import { movieService } from '../services';

interface Context {
  movies: IMovieResponse;
  movie: IMovieDetail;
  filters: IMoviesFilter;
  listMovies: (title: string) => void;
  getMovie: (imdbID: string) => void;
  setMovie: (value: IMovieDetail) => void;
  setFilters: (value: IMoviesFilter) => void;
}

export const MovieContext = createContext<Context>({} as Context);

export const MovieProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<IMovieResponse>();
  const [movie, setMovie] = useState<IMovieDetail>();
  const [filters, setFilters] = useState({
    title: '',
  });

  const listMovies = useCallback(async () => {
    if (!filters.title) return;

    try {
      const response = await movieService.listMovies(filters);

      setMovies(response);
    } catch (error) {
      toast.error(error.message);
    }
  }, [filters]);

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
      value={{
        movies,
        movie,
        filters,
        setMovie,
        listMovies,
        getMovie,
        setFilters,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default function useMovie() {
  return useContext(MovieContext);
}
