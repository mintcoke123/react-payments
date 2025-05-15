import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  font-size: 9.5px;
  color: #ff3d3d;
`;

interface ErrorMessageProps {
  value: string;
}

function ErrorMessage({ value }: ErrorMessageProps) {
  return <StyledErrorMessage>{value}</StyledErrorMessage>;
}

export default ErrorMessage;
