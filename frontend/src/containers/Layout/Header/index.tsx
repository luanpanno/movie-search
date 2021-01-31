import { Link } from 'react-router-dom';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Link to="/">Movie Search</Link>
      <input type="text" />
    </Container>
  );
};

export default Header;
