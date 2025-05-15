import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: #8b95a1;
  font-size: 9.5px;
`;

interface InputTitlePropsType {
  title: string;
  subtitle?: string;
}

function CardTitle({ title, subtitle }: InputTitlePropsType) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </TitleContainer>
  );
}

export default CardTitle;