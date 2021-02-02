import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';

import SearchInput from '../../../components/SearchInput';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Link to="/" className="logo">
        Movie <br /> Search
      </Link>
      <div className="input">
        <SearchInput placeholder="ex: Spider-Man" />
      </div>
      <Toggle />
    </Container>
  );
};

export default Header;
