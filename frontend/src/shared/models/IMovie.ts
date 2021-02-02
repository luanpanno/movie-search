export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface IMovieDetail extends IMovie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
  Ratings: IMovieRating[];
}

export interface IMovieRating {
  Source: string;
  Value: string;
}

export interface IMovieResponse {
  Search: IMovie[];
  totalResults: number;
  Response: boolean;
}

export interface IMoviesFilter {
  title: string;
}
