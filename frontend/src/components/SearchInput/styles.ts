import styled from 'styled-components';

interface Props {
  hasError?: boolean;
  hasFocus?: boolean;
  type?: string;
  disabled?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  margin-bottom: 5px;
`;

export const InputWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => (props.disabled ? '#eee' : '#fff')};
  border: 1px solid
    ${(props) => (props.hasError ? props.theme.colors.red : '#ccc')};
  border-radius: 2px;
  /* margin: 5px 0; */
  padding: 5px 0 5px 10px;

  input {
    outline: 0;
    padding: 5px;
    width: 90%;
    transition: all 200ms;
    border: none;
    outline: none;
    font-size: 1.1rem;
  }

  .search-icon {
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #aaa;
    font-size: 1.5rem;
    border-left: 1px solid #eee;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
  }
`;
