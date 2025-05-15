import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  font-size: 9.5px;
  color: #ff3d3d;
`;

interface ErrorMessageType {
  value: string;
}

function CardError({ value }: ErrorMessageType) {
  return <StyledErrorMessage>{value}</StyledErrorMessage>;
}

export default CardError;