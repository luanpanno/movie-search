import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 75px;
  background-color: ${(props) => props.theme.colors.greyDark};
  padding: 0 100px;

  .logo {
    text-decoration: none;
    color: white;
    font-size: 1.8rem;
    width: 150px;
    display: inline-block;
    text-align: center;
    padding: 5px 10px;
  }

  .input {
    width: 65%;
  }
`;
