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
  grid-template-rows: 75px 1fr;
  overflow: auto;
  min-width: 600px;
  max-width: 80%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid #eee;

    h2 {
      font-weight: 600;
      font-size: 1.6rem;
      color: #333;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #333;
        font-size: 1.8rem;
      }
    }
  }

  main {
    padding: 10px 20px;
    overflow: auto;
  }
`;
