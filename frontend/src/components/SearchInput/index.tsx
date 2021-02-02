import { useState } from 'react';
import { RiSearch2Line } from 'react-icons/ri';

import ErrorText from '../ErrorText';
import { Container, InputWrapper } from './styles';

interface Props {
  name?: string;
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

const SearchInput: React.FC<Props> = ({
  name,
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
      disabled={disabled}
    >
      <InputWrapper>
        <input
          className={className}
          type="text"
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
        <button type="button" className="search-icon">
          <RiSearch2Line />
        </button>
      </InputWrapper>
      {errorText && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default SearchInput;
