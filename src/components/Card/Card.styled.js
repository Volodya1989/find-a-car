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
  }
  @media screen and (min-width: 768px) {
    width: 225px;
    height: 362px;
    margin-left: 0;
    margin-right: 0;
  }
  @media screen and (min-width: 1100px) {
    width: 201px;
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
    height: 93px;
  }
`;
export const HorizontalLine = styled.div`
  border-top: 1px solid lightgray;
`;

export const Button = styled.button`
  background: linear-gradient(to bottom right, #009ffd, #2a2a72);
  border: 0;
  display: block;
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial,
    sans-serif;
  font-size: 10px;
  line-height: 2.5;
  outline: transparent;
  padding: 0 1rem;
  transition: transform background 0.6s ease-in-out;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  &:not([disabled]):focus {
    background: linear-gradient(
      to right top,
      #0dcbec,
      #00aefd,
      #008dff,
      #0063ff,
      #2612eb
    );
    transition: transform background 0.6s ease-in-out;
  }
  &:not([disabled]):hover {
    transition: transform 0.6s ease-in-out;
    transform: background;
    background: linear-gradient(
      to right top,
      #0dcbec,
      #00aefd,
      #008dff,
      #0063ff,
      #2612eb
    );
  }
`;

export const CardImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 262px;
  @media screen and (min-width: 768px) {
    height: 169px;
  }
  @media screen and (min-width: 1100px) {
    height: 133px;
  }
`;
