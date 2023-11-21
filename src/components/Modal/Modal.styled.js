import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10110;
  opacity: ${({ isShowModal }) => (isShowModal ? '0' : '1')};
  transition: opacity var(--transition-time-and-cubic);
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ModalStyled = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: -22px;
  cursor: pointer;
  border: none;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 0;
  color: white;
  font-size: 30px;
  font-weight: 700;
  background-color: transparent;
  &:hover,
  &:focus {
    color: #48a7f0;
    transition: var(--transition-time-and-cubic);
  }
`;
