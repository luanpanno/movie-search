import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      Developed by Luan Panno - All rights reserved &copy;{' '}
      {new Date().getFullYear()}
    </Container>
  );
};

export default Footer;
