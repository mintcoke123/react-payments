import styled from 'styled-components';
import { MASTERCARD, VISA } from '../assets/image';
import checkCardBrand from '../utils/checkCardBrand';
import formatCardDisplayNumber from '../utils/formatCardDisplayNumber';
import formatValue from '../utils/formatValue';

const CardContainer = styled.div`
  background-color: #333333;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 3px 3px 5px 0px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0 auto;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardIc = styled.div`
  background-color: #ddcd78;
  border-radius: 4px;
  width: 36px;
  height: 22px;
`;

const CardLogo = styled.img`
  width: 36px;
  height: 22px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardDetail = styled.p`
  height: 20px;
  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: inherit;
  white-space: pre-wrap;
`;

const CardNumberGrid = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;

interface CardImageType {
  cardNumber: string[];
  cardPeriod: { month: string; year: string };
  cardOwner: string;
}

interface CardImageTableType {
  masterCard: string;
  visa: string;
  domesticCard: string;
}

function CardPreview({ cardNumber, cardPeriod, cardOwner }: CardImageType) {
  const getCardImage = () => {
    const cardImageTable: CardImageTableType = {
      masterCard: MASTERCARD,
      visa: VISA,
      domesticCard: '',
    };
    return cardImageTable[checkCardBrand(cardNumber)];
  };

  const imageUrl = getCardImage();

  return (
    <CardContainer>
      <CardHeader>
        <CardIc />
        {imageUrl && <CardLogo src={imageUrl} />}
      </CardHeader>

      <CardContent>
        <CardNumberGrid as={CardDetail}>
          {formatCardDisplayNumber(
            cardNumber,
            [2, 3]
          ).map((numbers, index) => (
            <p key={index}>{numbers}</p>
          ))}
        </CardNumberGrid>
         <CardDetail>{formatValue.periodFormat(cardPeriod.month, cardPeriod.year)}</CardDetail>
        <CardDetail>{cardOwner}</CardDetail>
      </CardContent>
    </CardContainer>
  );
}

export default CardPreview;