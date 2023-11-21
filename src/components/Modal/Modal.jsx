import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyled, CloseBtn } from './Modal.styled';
const modalRootEl = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

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

// =====================
// import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
// import { Overlay, ModalStyled, CloseBtn, ModalImg } from './Modal.styled';
// const modalRootEl = document.querySelector('#modal-root');

// const Modal = ({ onClose, activeImg }) => {
//   useEffect(() => {
//     const handleKeyDown = e => {
//       if (e.code === 'Escape') {
//         onClose();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   const handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       onClose();
//     }
//   };

//   return createPortal(
//     <Overlay onClick={handleBackdropClick}>
//       <ModalStyled>
//         <ModalImg
//           src={
//             activeImg
//               ? require('../../images/bridge.jpg')
//               : require('../../images/placeholderCar.jpg')
//           }
//           onError={e =>
//             (e.target.src = require('../../images/placeholderCar.jpg'))
//           }
//           alt="large image"
//         />
//         <CloseBtn type="button" onClick={() => onClose()}>
//           &times;
//         </CloseBtn>
//       </ModalStyled>
//     </Overlay>,
//     modalRootEl
//   );
// };

// export default Modal;
