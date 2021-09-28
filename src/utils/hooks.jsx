import { useEffect, useRef, useState } from 'react';

export function useModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeydown = (e) => {
      console.log(e.key);
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  const onClose = (e) => {
    if (e.target === modalRef.current) closeModal();
  };
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return { open, openModal, closeModal, modalRef, onClose };
}
