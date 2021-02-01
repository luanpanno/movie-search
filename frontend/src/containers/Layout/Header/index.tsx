import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';

import Input from '../../../components/Input';
import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Link to="/" className="logo">
        Movie <br /> Search
      </Link>
      <div className="input">
        <Input />
      </div>
      <Toggle />
    </Container>
  );
};

export default Header;
