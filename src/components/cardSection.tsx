import styled, { css } from 'styled-components';
import CardTitle from './cardTitle';
import CardInput from './cardInput';
import ErrorMessage from './errorMessage';
import { InformationDetailType, informationSectionType, period } from '../types/card';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

const CardSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 12px;
  color: #0a0d13;
`;

const CardInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const CardInputBox = styled.div`
  display: flex;
  gap: 10px;
`;

const cardInputStyle = ({ borderColor, focusColor }: { borderColor: string; focusColor: string }) => css`
  border: 1px solid ${borderColor};
  border-radius: 4px;
  padding: 8px;
  font-size: 11px;
  outline: none;
  width: 100%;

  &:active,
  &:focus {
    border-color: ${focusColor};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

interface CardSectionProps {
  onCardInputChange: (value: string, index: number, inputSection?: InformationDetailType) => void;
  informationSection: informationSectionType;
  isError: boolean[];
  errorMessage: string;
}

function CardSection({
  onCardInputChange,
  informationSection,
  isError,
  errorMessage,
}: CardSectionProps) {
  const typeTable = {
    number: CARD_NUMBER,
    period: CARD_PERIOD,
    owner: CARD_OWNER,
  };

  const { title, subtitle, label, placeholders, maxLength } = typeTable[informationSection];

  const getInputType = (type: informationSectionType, index: number) => {
    if (type === 'number' && (index === 2|| index === 3)) {
      return 'password';
    }
    if (type === 'number' || type === 'period') {
      return 'number';
    }
    return 'text';
  };

  return (
    <CardSectionWrapper>
      <CardTitleWrapper>
        <CardTitle title={title} subtitle={subtitle} />
      </CardTitleWrapper>

      <CardInputContainer>
        <Label htmlFor={informationSection}>{label}</Label>
        <CardInputBox>
          {placeholders.map((placeholder: string, index: number) => {
            const inputSection = informationSection === 'period' ? period[index] : informationSection;

            return (
              <CardInput
                key={index}
                maxLength={maxLength}
                type={getInputType(informationSection, index)}
                placeholder={placeholder}
                onStateChange={(value) => onCardInputChange(value, index, inputSection)}
                inputCss={cardInputStyle({
                  borderColor: isError[index] ? '#FF3D3D' : '#acacac',
                  focusColor: isError[index] ? '#FF3D3D' : '#000',
                })}
              />
            );
          })}
        </CardInputBox>
        <ErrorMessage value={errorMessage} />
      </CardInputContainer>
    </CardSectionWrapper>
  );
}

export default CardSection;
