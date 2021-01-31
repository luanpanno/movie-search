import Footer from './Footer';
import Header from './Header';
import { Container, Main } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
