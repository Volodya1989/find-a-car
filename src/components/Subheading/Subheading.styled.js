import styled from 'styled-components';

export const Description = styled.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1440px) {
    font-size: 27px;
    line-height: 1.06;
  }
`;
