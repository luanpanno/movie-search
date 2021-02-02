import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 25px;

  header {
    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 25px;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 25px;
  }
`;
