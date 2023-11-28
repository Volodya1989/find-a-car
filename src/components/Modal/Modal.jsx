import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled, CloseBtn } from './Modal.styled';
const modalRootEl = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  //Modal made as reusable comp as we can pass any content using CHILDREN props
  useEffect(() => {
    //closing it based on ESCAPE
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    //adding listener to listen to the event based on ESCAPE
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      //removing listener to avoid having multiple listeners
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  //closing modal when clicking on backdrop when current target and e.target are same
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  // rendering using Create Portal as Modal exists outside the DOM hierarchy of the parent component
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyled>
        {children}
        <CloseBtn type="button" onClick={() => onClose()}>
          &times;
        </CloseBtn>
      </ModalStyled>
    </Overlay>,
    modalRootEl
  );
};

export default Modal;
