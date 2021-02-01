import { useState } from 'react';

import ErrorText from '../ErrorText';
import { Container, InputWrapper } from './styles';

interface Props {
  label?: string;
  type?: string;
  name?: string;
  propend?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  value?: string | number;
  checked?: boolean;
  defaultChecked?: boolean;
  hasError?: boolean;
  errorText?: string;
  placeholder?: string;
  onChange?(e: React.ChangeEvent<unknown>): void;
  onBlur?(e: React.FocusEvent<unknown>): void;
}

const Input: React.FC<Props> = ({
  label,
  type = 'text',
  name,
  propend,
  disabled,
  className,
  onChange,
  value,
  checked,
  defaultChecked,
  onBlur,
  hasError,
  errorText,
  placeholder,
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const handleBlur = (e: React.FocusEvent<unknown>) => {
    if (onBlur) onBlur(e);

    setHasFocus(false);
  };

  return (
    <Container
      hasError={hasError ?? false}
      hasFocus={hasFocus}
      type={type}
      disabled={disabled}
    >
      <label htmlFor={name}>{label}</label>
      <InputWrapper>
        <input
          className={className}
          type={type}
          onFocus={() => setHasFocus(true)}
          onBlur={handleBlur}
          id={name}
          name={name}
          disabled={disabled}
          value={value}
          onChange={onChange}
          checked={checked}
          defaultChecked={defaultChecked}
          placeholder={placeholder}
        />
        {propend}
      </InputWrapper>
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default Input;
