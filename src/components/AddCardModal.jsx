import { ModalContent, ModalFooter, ModalHeader } from '../styles';
import { Modal } from './Modal';

export const AddCardModal = ({ closeModal, modalRef, onClose }) => (
  <Modal modalRef={modalRef} onClose={onClose}>
    <ModalHeader>
      <p>Add Card</p>
    </ModalHeader>
    <ModalContent>
      <p>Add Card</p>
    </ModalContent>
    <ModalFooter>
      <button onClick={() => closeModal()}>Cancel</button>
      <button onClick={() => closeModal()}>Confirm</button>
    </ModalFooter>
  </Modal>
);
