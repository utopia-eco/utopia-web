import styled from 'styled-components';

const SectionWrapper = styled.div`
  background-color: #004FBF;
  padding: 75px 0;
  overflow: hidden;
  @media (max-width: 1440px) {
  }
  @media only screen and (max-width: 480px) {
    padding: 30px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  text-align: center;
  &:nth-child(2) {
    margin-top: 140px;
  }

  > div:first-child {
    @media only screen and (min-width: 1270px) {
      margin-right: 80px
    }
  }

  .content {
    h2:nth-child(2) {
      font-size: 18px;
      letter-spacing: 0.55rem;
    }

    @media only screen and (max-width: 768px) {
      margin-bottom: 50px;
    }
  }
`;

export const ProductSectionWrapper = styled.div`
  padding: 90px 70px 70px;
  border-radius: 20px;
  background-color: var(--primaryBackgroundColor);
  color: var(--primaryColor);
  width: auto;
  margin-bottom: 150px;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 600px;
  }

  p {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.25rem;
  }

  span {
    font-size: 20px;

    &.highlightText {
      color: var(--tertiaryTextColor);
    }
  }
`;

export const ProductIcon = styled.div`
  position: absolute;
  top: -70px;
  border-radius: 50%;
  box-shadow: 0px 3px 20px 5px rgba(249, 223, 0, 0.7);
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  width: 140px;
  height: 140px;
  background-color: var(--secondaryBackgroundColor);
`;

export default SectionWrapper;
