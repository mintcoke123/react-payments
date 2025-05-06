import React from "react";
import styles from "./../../styles/CardForm.module.css";

const CardInformationForm = (children) => {
  return (
    <div className="form-section">
      <div className="styles.label">결제할 카드 번호를 입력해 주세요</div>
      <div className="styles.subLabel">본인 명의의 카드만 결제 가능합니다.</div>

      <label for="card-number">카드 번호</label>
      <div class="styles.inputGroup">{children}</div>
      <div class="error-message">숫자만 입력 가능합니다.</div>
    </div>
  );
};
