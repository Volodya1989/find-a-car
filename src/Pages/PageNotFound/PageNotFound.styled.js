import styled from 'styled-components';

export const NotFound = styled.h1`
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

export const Wrapper = styled.div`
  position: relative;
  body {
  }
  display: block;
  text-align: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;

  @media screen and (min-width: 768px) {
    width: 800px;

    font-size: 30px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1100px) {
    width: 1200px;

    font-size: 35px;
    line-height: 1.06;
  }
`;
