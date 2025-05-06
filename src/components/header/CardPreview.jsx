import React from "react";
import styles from "../../styles/CardPreview.module.css";
import chipIcon from "../../assets/chip.svg";
import mastercardLogo from "../../assets/mastercard.svg"; // 필요 시 다른 로고도 추가 가능

const CardPreview = ({ cardNumber }) => {
  return (
    <div className={styles.CardPreview}>
      <img src={chipIcon} alt="chip" className={styles.cardChip} />
      <div className={styles.cardNumberPreview}>{cardNumber}</div>
      <img
        src={mastercardLogo}
        alt="Card company logo"
        className={styles.cardLogo}
      />
    </div>
  );
};

export default CardPreview;
