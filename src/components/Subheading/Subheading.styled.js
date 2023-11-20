import styled from 'styled-components';

export const Description = styled.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.07;
    margin-top: 5px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 27px;
    line-height: 1.06;
  }
`;
