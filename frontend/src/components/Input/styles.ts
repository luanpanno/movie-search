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

  label {
    color: ${(props) => (props.hasError ? props.theme.colors.red : 'black')};
    padding-left: 10px;
  }

  input {
    margin: 5px 0;
    border-radius: 2px;
    outline: 0;
    border: 1px solid
      ${(props) => (props.hasError ? props.theme.colors.red : '#ccc')};
    padding: 5px;
    width: 100%;
    transition: all 200ms;
    background-color: ${(props) => (props.disabled ? '#eee' : '#fff')};
  }
`;

export const InputWrapper = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 100%;
`;
