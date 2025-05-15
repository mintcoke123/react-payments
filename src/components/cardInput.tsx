import styled, { css } from 'styled-components';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  inputCss: ReturnType<typeof css>;
  onStateChange: (value: string) => void;
}

const StyledInput = styled.input<{ inputCss: ReturnType<typeof css> }>`
  ${(props) => props.inputCss}
`;

const CardInput: React.FC<InputProps> = ({
  inputCss,
  type,
  placeholder,
  onStateChange,
  maxLength,
}) => {
  return (
    <StyledInput
      inputCss={inputCss}
      maxLength={maxLength}
      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > e.target.maxLength) {
          e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
      }}
      type="text"
      min={0}
      placeholder={placeholder}
      onChange={(e) => onStateChange(e.target.value)}
    />
  );
};

export default CardInput;