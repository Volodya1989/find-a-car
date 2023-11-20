import styled from 'styled-components';

export const Container = styled.section`
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
    width: 1000px;

    font-size: 35px;
    line-height: 1.06;
  }
`;
