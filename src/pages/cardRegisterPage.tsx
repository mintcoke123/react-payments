import { useState } from 'react';
import CardSection from '../components/cardSection';
import CardPreview from '../components/CardPreview';
import styled from 'styled-components';
import { InformationDetailType } from '../types/card';


import { ERROR_MESSAGE } from '../constants/errorMessage';
import { VALIDATION } from '../constants/cardInformation';
import { isRange } from '../utils/checkCardBrand';

interface ValidateResultType {
  isError: boolean;
  message: string;
}

interface ValidateInputTableType {
  number: () => ValidateResultType;
  month: () => ValidateResultType;
  year: () => ValidateResultType;
  owner: () => ValidateResultType;
}

const validateInput = (value: string, informationDetail: InformationDetailType) => {
  const validateInputTable: ValidateInputTableType = {
    number: () => cardNumberValidated(value),
    month: () => cardMonthValidated(value),
    year: () => cardYearValidated(value),
    owner: () => cardOwnerValidated(value),
  };

  const validateFunction = validateInputTable[informationDetail];
  return validateFunction();
};

function cardNumberValidated(value: string) {
  const valueToNumber = Number(value);
  if (!isNumber(valueToNumber)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isNumberCount(value, VALIDATION.cardNumberCount))
    return { isError: true, message: ERROR_MESSAGE.inputCount(VALIDATION.cardNumberCount) };
  return { isError: false, message: '' };
}

function cardMonthValidated(value: string) {
  const valueToNumber = Number(value);
  if (!isNumber(valueToNumber)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isInRange(valueToNumber, VALIDATION.cardMonthRange.min, VALIDATION.cardMonthRange.max))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange,
    };
  return { isError: false, message: '' };
}

function cardYearValidated(value: string) {
  const valueToNumber = Number(value);
  const now = new Date();
  const year = now.getFullYear();
  const lastTwoDigits = year % 100;
  if (!isNumber(valueToNumber)) return { isError: true, message: ERROR_MESSAGE.notANumber };
  if (!isInRange(valueToNumber, lastTwoDigits, lastTwoDigits + VALIDATION.maximumYearPeriod))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange,
    };
  return { isError: false, message: '' };
}

function cardOwnerValidated(value: string) {
  if (!isUpperCaseEnglish(value)) return { isError: true, message: ERROR_MESSAGE.upperCase };
  if (!isInRange(value.length, VALIDATION.cardOwnerLength.min, VALIDATION.cardOwnerLength.max))
    return {
      isError: true,
      message: ERROR_MESSAGE.notInRange,
    };
  return { isError: false, message: '' };
}

function isNumber(value: number) {
  if (isNaN(value)) {
    return false;
  }
  return true;
}

function isInRange(value: number, min: number, max: number) {
  if (isRange(value, min, max)) {
    return false;
  }
  return true;
}

function isUpperCaseEnglish(value: string) {
  const regex = /^[A-Z\s]*$/;
  if (!regex.test(value)) {
    return false;
  }
  return true;
}

function isNumberCount(value: string, count: number) {
  const valueLength = value.length;
  if (valueLength !== count) {
    return false;
  }
  return true;
}

const AppWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 31px;
  gap: 45px;
  width: 376px;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

interface HandleCardInputType {
  value: string;
  index: number;
  inputSection: InformationDetailType;
}

interface PeriodTableType {
  [key: number]: 'month' | 'year';
  0: 'month';
  1: 'year';
}

function CardRegisterPage() {
  const [cardNumber, setCardNumber] = useState<{ data: string[]; errorMessage: string }>({
    data: ['', '', '', ''],
    errorMessage: '',
  });

  const [cardPeriod, setCardPeriod] = useState<{
    data: { month: string; year: string };
    errorMessage: string;
  }>({
    data: { month: '', year: '' },
    errorMessage: '',
  });

  const [cardOwner, setCardOwner] = useState<{ data: string; errorMessage: string }>({
    data: '',
    errorMessage: '',
  });

  const [isError, setIsError] = useState({
    number: [false, false, false, false],
    month: false,
    year: false,
    owner: false,
  });

  const periodTable: PeriodTableType = {
    0: 'month',
    1: 'year',
  };

  const handleCardNumber = (value: string, index: number) => {
    setCardNumber((prev) => {
      const updated = [...prev.data];
      updated[index] = value;
      return { ...prev, data: updated };
    });
  };

  const handleCardPeriod = (value: string, index: number) => {
    setCardPeriod((prev) => {
      const updated = { ...prev.data };
      updated[periodTable[index]] = value;
      return { ...prev, data: updated };
    });
  };

  const handleCardOwner = (value: string) => {
    setCardOwner((prev) => ({ ...prev, data: value }));
  };

  const setStateFunctions = {
    number: handleCardNumber,
    month: handleCardPeriod,
    year: handleCardPeriod,
    owner: handleCardOwner,
  };

  const handleCardInput = ({ value, index, inputSection }: HandleCardInputType) => {
    const fn = setStateFunctions[inputSection];
    fn(value, index);
  };

  const setErrorFunctions = {
    number: setCardNumber,
    month: setCardPeriod,
    year: setCardPeriod,
    owner: setCardOwner,
  };

  const handleCardError = (
    isErr: boolean,
    inputSection: InformationDetailType,
    message: string,
    index: number
  ) => {
    setIsError((prev) => {
      if (inputSection === 'number') {
        const updated = [...prev.number];
        updated[index] = isErr;
        return { ...prev, number: updated };
      } else {
        return { ...prev, [inputSection]: isErr };
      }
    });

    const setErrorFn = setErrorFunctions[inputSection];
    setErrorFn((prev: any) => ({ ...prev, errorMessage: message }));
  };

  const handleInputChange = ({ value, index, inputSection }: HandleCardInputType) => {
    const { isError, message } = validateInput(value, inputSection);
    handleCardInput({ value, index, inputSection });
    handleCardError(isError, inputSection, message, index);
  };

  return (
    <AppWrapper>
      <AppContainer>
        <CardPreview
          cardNumber={cardNumber.data}
          cardPeriod={cardPeriod.data}
          cardOwner={cardOwner.data}
        />

        <InputForm>
          <CardSection
            onCardInputChange={(value, index) =>
              handleInputChange({ value, index, inputSection: 'number' })
            }
            informationSection="number"
            isError={isError.number}
            errorMessage={cardNumber.errorMessage}
          />

          <CardSection
            onCardInputChange={(value, index, inputSection) => {
              if (inputSection) handleInputChange({ value, index, inputSection });
            }}
            informationSection="period"
            isError={[isError.month, isError.year]}
            errorMessage={cardPeriod.errorMessage}
          />

          <CardSection
            onCardInputChange={(value, index) =>
              handleInputChange({ value, index, inputSection: 'owner' })
            }
            informationSection="owner"
            isError={[isError.owner]}
            errorMessage={cardOwner.errorMessage}
          />
        </InputForm>
      </AppContainer>
    </AppWrapper>
  );
}

export default CardRegisterPage;