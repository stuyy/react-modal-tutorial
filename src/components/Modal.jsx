import { useEffect } from 'react';
import { ModalContainer, ModalOverlay } from '../styles';

export const Modal = ({ children, modalRef, onClose }) => {
  useEffect(() => {
    console.log(modalRef);
  });
  return (
    <ModalOverlay ref={modalRef} onClick={onClose}>
      <ModalContainer>{children}</ModalContainer>
    </ModalOverlay>
  );
};
