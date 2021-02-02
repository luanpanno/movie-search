import { useEffect } from 'react';

import Card from '../../components/Card';
import useMovie from '../../shared/hooks/useMovie';
import { Container } from './styles';

const Home = () => {
  const { listMovies, movies, filters } = useMovie();

  useEffect(() => {
    listMovies('spider');
  }, [listMovies]);

  return (
    <Container>
      <header>
        {movies && <h2>Here are the results for {filters.title}...</h2>}
      </header>
      <main>
        {movies?.Search?.map((item) => {
          return <Card key={item.imdbID} movie={item} />;
        })}
      </main>
    </Container>
  );
};

export default Home;
