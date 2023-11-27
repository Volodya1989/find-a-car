import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { createGlobalStyle } from 'styled-components';

export const StyledToastContainer = styled(ToastContainer).attrs({
  className: '.toast-message',
  toastClassName: 'toast',
  bodyClassName: 'body',
  progressClassName: 'progress',
})`
  .toast-message {
    background-color: darkblue;
    color: #fff;
    font-size: 20px;
  }
`;
export const Shadow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to bottom right, #fffcff, #d5fefd);
  margin-top: 50px;
`;
export const Wrapper = styled.div`
  height: 100vh;
  margin-top: 10%;
  @media screen and (min-width: 768px) {
    margin-top: 3%;
  }
`;

export const GlobalStyle = createGlobalStyle`
body{
  overflow-y: ${({ isShowModal }) => (isShowModal ? 'hidden' : 'scroll')};
}
`;

export const MainSection = styled.section`
  position: relative;
  body {
  }
  display: block;
  text-align: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-device-width: 350px) {
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    width: 700px;
    padding: 30px;

    font-size: 30px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1150px) {
    width: 1100px;

    font-size: 35px;
    line-height: 1.06;
  }
`;

export const FilterIcon = styled.img.attrs({
  src: './icons/filter.svg',
})`
  width: auto;
  height: 18px;
  fill: blue;
`;
export const ToolkitWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items;center;
  margin-right: auto;
   @media screen and (min-width: 768px) {
  justify-content: space-around;
  }
`;

export const FilterButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin-left: 25px;

  &:hover {
    opacity: 0.85;
  }

  ${({ active }) =>
    (active || '') &&
    `
    opacity: 0.85;
  `}

  ${({ disabled }) =>
    (disabled || '') &&
    `
    pointer-events: none;
    opacity: 0.85;
  `}
`;
