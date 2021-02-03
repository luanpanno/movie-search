import { IMovie } from '../../shared/models/IMovie';
import { Container } from './styles';

interface Props {
  movie: IMovie;
  onClick?: () => void;
}

const Card: React.FC<Props> = ({ movie, onClick }) => {
  return (
    <Container>
      <div
        className="img"
        onClick={onClick}
        tabIndex={0}
        role="button"
        onKeyDown={() => {}}
      >
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
