import { useEffect, useState } from 'react';

import Card from '../../components/Card';
import Loading from '../../components/Loading';
import { useLoading } from '../../shared/hooks/useLoading';
import useMovie from '../../shared/hooks/useMovie';
import Detail from './components/Detail';
import { Container } from './styles';

const Home = () => {
  const { isLoading } = useLoading();
  const { listMovies, movies, filters } = useMovie();
  const [openDetail, setOpenDetail] = useState(false);

  useEffect(() => {
    listMovies('spider');
  }, [listMovies]);

  return (
    <Container>
      <header>
        {movies && <h2>Here are the results for {filters.title}...</h2>}
      </header>
      <main>
        {isLoading && <Loading />}
        {movies?.Search?.map((item) => {
          return (
            <Card
              key={item.imdbID}
              movie={item}
              onClick={() => setOpenDetail(true)}
            />
          );
        })}
      </main>
      {openDetail && <Detail setClose={setOpenDetail} />}
    </Container>
  );
};

export default Home;
