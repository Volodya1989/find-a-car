import styled from 'styled-components';

export const CardWrapper = styled.li`
  box-shadow: var(--shade);
  border-radius: 6px;
  width: 300px;
  height: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  transition: transform 0.4s;

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    width: 264px;
    height: 338px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 35px;
    line-height: 1.06;
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

export const HorizontalLine = styled.div`
  border-top: 1px solid lightgray;
`;

export const CardImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
