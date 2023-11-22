import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Shadow = styled.div`
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 10px;
  padding: 20px;
  background: linear-gradient(to bottom right, #fffcff, #d5fefd);
  margin-top: 50px;
`;
export const Wrapper = styled.div`
  height: 100vh;
  margin-top: 5%;
`;

export const GlobalStyle = createGlobalStyle`
body{
  overflow-y: ${({ isShowModal }) => (isShowModal ? 'hidden' : 'scroll')};
}
`;
