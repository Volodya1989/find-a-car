import styled from 'styled-components';

export const Wrapper = styled.section`
  position: absolute;
  top: calc(4%+10px);
  right: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s linear;
  z-index: 2;
  @media screen and (min-width: 768px) {
    top: 12%;
  }
  @media screen and (min-width: 1100px) {
    top: 20%;
  }

  ${({ visible }) =>
    (visible === 'true' || '') &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const InnerWrapper = styled.div`
  width: 250px;
  min-height: 200px;
  max-height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  background: linear-gradient(
    to right top,
    #0dcbec,
    #00aefd,
    #008dff,
    #0063ff,
    #2612eb
  );
  padding: 28px 20px 45px;
  box-shadow: 1px 1px 12px 2px rgb(154 154 154 / 37%);
  overflow: auto;
  transform: translateX(25px);
  transition: all 0.2s linear;
  position: relative;

  ${({ visible }) =>
    (visible === 'true' || '') &&
    `
    transform: translateX(0);
  `}
`;

export const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  border: 0;
  border-radius: 50%;
  background: #edeff0;
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin-left: auto;
  position: absolute;
  top: 12px;
  right: 12px;

  &:hover {
    opacity: 0.85;
  }
`;
export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  margin-right: auto;
`;
