import { RiCloseLine } from 'react-icons/ri';

import { Container, Content } from './styles';

interface Props {
  title: string;
  setClose: (state: boolean) => void;
}

const Modal: React.FC<Props> = ({ title, setClose, children }) => {
  function handleCloseModal() {
    setClose(false);
  }

  return (
    <Container>
      <Content>
        <header>
          <h2>{title}</h2>
          <button type="button" title="Close Modal" onClick={handleCloseModal}>
            <RiCloseLine />
          </button>
        </header>
        <main>{children}</main>
      </Content>
    </Container>
  );
};

export default Modal;
