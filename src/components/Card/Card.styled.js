import styled from 'styled-components';

export const CardWrapper = styled.li`
  box-shadow: var(--shade);
  border-radius: 10px;
  width: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 35px;
  transition: transform 0.4s;

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 225px;
    height: 362px;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (min-width: 1100px) {
    width: 175px;
    height: 335px;
  }
`;

export const CardSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  background-color: var(--basicWhite);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: left;
  background-color: #f7f7f7;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    padding-top: 22px;
    padding-bottom: 22px;
  }
`;

export const Description = styled.div`
  @media screen and (min-width: 768px) {
    height: 123px;
  }
`;
export const HorizontalLine = styled.div`
  border-top: 1px solid lightgray;
`;

export const CardImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
