import { CARD_IS_VISA_MASTERCARD } from '../constants/cardInformation';
import { CardBrandType, cardBrand } from '../types/card';

export const isRange = (value: number, min: number, max: number) => {
  return value < min || value > max;
};

const checkCardBrand = (cardNumber: string[]): CardBrandType => {
  const firstDigit = cardNumber[0][0];
  const firstTwoDigits = Number(cardNumber[0].substring(0, 2));

  if (firstDigit === CARD_IS_VISA_MASTERCARD.visa) {
    return cardBrand.visa;
  }
  if (!isRange(firstTwoDigits, CARD_IS_VISA_MASTERCARD.masterCard.min, CARD_IS_VISA_MASTERCARD.masterCard.max)) {
    return cardBrand.masterCard;
  }

  return cardBrand.domesticCard;
};

export default checkCardBrand;