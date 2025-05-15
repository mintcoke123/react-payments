export const CARD_IS_VISA_MASTERCARD = {
  visa: '4',
  masterCard: {
    min: 51,
    max: 55,
  },
};


export const VALIDATION = {
  cardNumberCount: 4,
  cardMonthRange: {
    min: 1,
    max: 12,
  },
  maximumYearPeriod: 10,
  cardOwnerLength: {
    min: 1,
    max: 20,
  },
  singleDigit: {
    min: 1,
    max: 9,
  },
};