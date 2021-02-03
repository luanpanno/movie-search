import { useEffect } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { Container, Content } from './styles';

interface Props {
  setClose: (state: boolean) => void;
}

const Detail: React.FC<Props> = ({ setClose, children }) => {
  function handleCloseModal() {
    setClose(false);
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return (
    <Container>
      <Content>
        <header>
          <button type="button" title="Close Modal" onClick={handleCloseModal}>
            <RiCloseLine />
          </button>
        </header>
        <main>{children}</main>
      </Content>
    </Container>
  );
};

export default Detail;
