import { DeleteCardModal } from './components/DeleteCardModal';
import { AddCardModal } from './components/AddCardModal';
import { useModal } from './utils/hooks';

function App() {
  const deleteCardModal = useModal();
  const addCardModal = useModal();
  return (
    <div>
      <button
        onClick={() => deleteCardModal.openModal()}
        disabled={deleteCardModal.open || addCardModal.open}
      >
        DELETE CARD
      </button>
      <button
        onClick={() => addCardModal.openModal()}
        disabled={deleteCardModal.open || addCardModal.open}
      >
        ADD CARD
      </button>
      {deleteCardModal.open && <DeleteCardModal {...deleteCardModal} />}
      {addCardModal.open && <AddCardModal {...addCardModal} />}
    </div>
  );
}

export default App;
