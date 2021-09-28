import { ModalContent, ModalFooter, ModalHeader } from '../styles';
import { Modal } from './Modal';

export const DeleteCardModal = ({ closeModal, modalRef, onClose }) => (
  <Modal modalRef={modalRef} onClose={onClose}>
    <ModalHeader>
      <p>Delete Card</p>
    </ModalHeader>
    <ModalContent>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
      <p>Hello World</p>
    </ModalContent>
    <ModalFooter>
      <button onClick={() => closeModal()}>Cancel</button>
      <button onClick={() => closeModal()}>Confirm</button>
    </ModalFooter>
  </Modal>
);
