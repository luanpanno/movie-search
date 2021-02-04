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

  .react-toggle-track-x {
    right: 5px;
  }

  .react-toggle-track-check {
    left: 2px;
  }

  .react-toggle-track-x,
  .react-toggle-track-check {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 20px;
    width: 20px;
    color: white;
  }

  .react-toggle-track {
    background-color: #333;
    border: 1px solid rgba(255, 255, 255, 0.2);

    svg {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .react-toggle--checked .react-toggle-track {
    background-color: cadetblue;

    svg {
      color: white;
    }
  }

  .react-toggle--checked .react-toggle-thumb {
    border-color: #3282b8;
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: #eee;
  }

  .react-toggle--checked:hover:not(.react-toggle--disabled)
    .react-toggle-track {
    background-color: #bbe1fa;
  }
`;
