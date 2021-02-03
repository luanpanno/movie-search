import { useContext } from 'react';
import { BarLoader, ClipLoader, PulseLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';

import { Container, Global } from './styles';

interface Props {
  type?: 'global' | 'spinner';
  message?: string;
  size?: number;
}

const Loading: React.FC<Props> = ({ type, message, size = 25 }) => {
  const themeContext = useContext(ThemeContext);

  if (type === 'global') {
    return (
      <Global>
        <BarLoader
          width={window.innerWidth}
          color={themeContext.colors.secondary}
          loading
        />
      </Global>
    );
  }

  if (type === 'spinner') {
    return (
      <Container>
        <ClipLoader size={size} color={themeContext.colors.secondary} />
      </Container>
    );
  }

  return (
    <Container>
      <PulseLoader size={size} color={themeContext.colors.secondary} />
      {message}
    </Container>
  );
};

export default Loading;
