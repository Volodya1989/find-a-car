import styled from 'styled-components';

export const PriceStyled = styled.p`
  font-size: 12px;
  line-height: 1.18;
  font-weight: var(--fontWeightBold);
  text-align: right;
  padding-top: 10px;
  color: green;
  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 1.06;
  }
`;
