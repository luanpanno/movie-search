import { useState } from 'react';
import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';

import SearchInput from '../../../components/SearchInput';
import useMovie from '../../../shared/hooks/useMovie';
import { Container } from './styles';

const Header = () => {
  const { setFilters } = useMovie();

  const [filter, setFilter] = useState('');

  function handleClick() {
    setFilters({
      title: filter,
    });
  }

  return (
    <Container>
      <Link to="/" className="logo">
        Movie <br /> Search
      </Link>
      <div className="input">
        <SearchInput
          placeholder="ex: Spider-Man"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilter(e.target.value)
          }
          onClick={handleClick}
        />
      </div>
      <Toggle />
    </Container>
  );
};

export default Header;
