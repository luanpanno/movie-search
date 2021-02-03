import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-rows: 50px 1fr;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      font-size: 1.5rem;
    }
  }
`;
