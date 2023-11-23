import styled from 'styled-components';

export const Title = styled.h3`
  margin-top: 10%;
  color: lightgray;
  font-weight: 600;
  font-size: var(--headingFontSize);
  line-height: 1.18;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1100px) {
    font-size: 50px;
    line-height: 1.06;
  }
`;
