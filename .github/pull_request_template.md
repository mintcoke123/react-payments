## 🎯 페이먼츠

이번 미션을 통해 다음과 같은 학습 경험들을 쌓는 것을 목표로 합니다.

### 1단계
- 재사용 가능한 Input Component를 개발한다.
- Storybook을 사용하여 컴포넌트의 다양한 상태를 시각적으로 테스트한다.
- 카드 정보를 효과적으로 렌더링 하기 위한 상태 관리를 경험한다.

### 2단계
- 다양한 Form 구성 요소들간의 상태를 효율적으로 관리한다.
- hooks API를 이용하여 상태 관리 로직을 구현하한다.
- custom hooks를 생성하여 Form 관리 로직을 컴포넌트에서 분리하고 재사용한다.
- Controlled & Uncontrolled Components에 입각하여 Form을 핸들링한다.

---

## 🕵️ 셀프 리뷰(Self-Review)

### 제출 전 체크 리스트

- [ ] 기능 요구 사항을 모두 구현했고, 정상적으로 동작하는지 확인했나요?
- [ ] 기본적인 프로그래밍 요구 사항(코드 컨벤션, 에러 핸들링 등)을 준수했나요?
- [ ] 배포한 데모 페이지에 정상적으로 접근할 수 있나요?
  - 기본 배포 링크 기입: \***\*\_\_\*\***

### 리뷰 요청 & 논의하고 싶은 내용

#### 1) 이번 단계에서 가장 많이 고민했던 문제와 해결 과정에서 배운 점

#### 2) 이번 리뷰를 통해 논의하고 싶은 부분

---

## ✅ 리뷰어 체크 포인트

<!-- 리뷰어가 이 PR을 검토할 때 중점적으로 확인할 사항입니다.
코드의 완성도만이 아니라, 리뷰이가 구현 과정에서 어떤 고민과 결정을 하며 학습했는지도 함께 고려해 주세요. -->

### 1. Form 상태 관리 & Custom Hook 분리

- 반복되는 로직을 custom hook으로 분리했는가?
- hook 내부와 UI 컴포넌트의 **역할이 명확하게 분리**되어 있는가?
- 상태 흐름이 직관적이며, Form 전체를 일관되게 관리할 수 있는 구조인가?

### 2. 입력 UI 흐름과 UX

- 카드 번호 입력 시 필드 간 **자동 포커싱 이동**이 자연스럽게 동작하는가?
- 숫자만 입력 가능한 필드에서 제한, 에러 메시지, 유효성 피드백 등 **사용자 경험이 충분히 고려**되었는가?

### 3. 컴포넌트 구조 및 재사용성

- 컴포넌트가 명확한 **역할과 책임**을 가지며 과도하게 분리되거나 중첩되어 있지 않은가?
- Input, Button 등 재사용 가능한 컴포넌트가 잘 정의되어 있는가?

### 4. 상태 기반 유효성 검사 및 확인 버튼 활성화

- 모든 필드가 유효할 때만 확인 버튼이 **정확히 활성화/비활성화**되는가?
- 유효성 검사의 기준이 명확하고, **상태 변경에 따른 UI 반응**이 잘 연결되어 있는가?
