import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Main = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  padding: 0 100px;
`;
