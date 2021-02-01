import { useEffect } from 'react';

import useMovie from '../../shared/hooks/useMovie';

const Home = () => {
  const { listMovies } = useMovie();

  useEffect(() => {
    listMovies('spider');
  }, [listMovies]);

  return <h1>home</h1>;
};

export default Home;
