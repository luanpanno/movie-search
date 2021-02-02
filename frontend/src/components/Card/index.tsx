import { IMovie } from '../../shared/models/IMovie';
import { Container } from './styles';

interface Props {
  movie: IMovie;
}

const Card: React.FC<Props> = ({ movie }) => {
  return (
    <Container>
      <div className="img">
        <img src={movie.Poster} alt="" />
      </div>
      <div className="text">
        <span className="type">{movie.Type}</span>
        <span className="title">{movie.Title}</span>
        <span className="year">{movie.Year}</span>
      </div>
    </Container>
  );
};

export default Card;
