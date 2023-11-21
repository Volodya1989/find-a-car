import styled from 'styled-components';

export const ModalDetailsStyled = styled.img`
  positon: relative;
`;

export const Description = styled.div`
  display: block;
  max-width: 600px;
  background-color: #f7f7f7;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.07;
    width: 600px;
  }
  @media screen and (min-width: 1100px) {
    font-size: 30px;
    line-height: 1.06;
  }
`;

export const Text = styled.p`
  font-size: var(--subheadingFonSize);
  line-height: 1.18;
  margin-top: 10px;
  margin-bottom: 25px;
`;
export const Heading = styled.h5`
  font-size: 25px;
  line-height: 1.18;
  font-weight: 500;
  margin-bottom: 25px;
  text-align: center;
`;
