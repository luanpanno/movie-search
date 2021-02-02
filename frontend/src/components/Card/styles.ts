import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.greyDark};
  cursor: pointer;

  .img {
    display: flex;
    justify-content: center;
    height: 350px;
    overflow: hidden;

    img {
      width: 100%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      transition: transform 400ms;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    padding: 5px 10px;
    gap: 5px;

    .type {
      color: #ccc;
      margin-top: 5px;
    }

    .title {
      font-size: 1.2rem;
      color: white;
      height: 50px;
    }

    .year {
      font-size: 0.9rem;
      color: #ccc;
      margin-bottom: 5px;
    }
  }
`;
