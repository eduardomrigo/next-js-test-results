import styles from './style.module.css';


interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const ConfirmationModal = ({ isOpen, onClose, title, content }:ConfirmationModalProps) => {
  if (!isOpen) return null;


  const handleCancel = () => {
    console.log('Botão Cancelar foi clicado.');
    onClose();
  };

  const handleConfirm = () => {
    console.log('Botão Confirmar foi clicado.');
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div data-modal-wrapper className={styles.wrapper}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
          data-modal-container
        >
          <div data-modal-header>
            <h2>{title}</h2>
            <button data-modal-close onClick={onClose}>
              X
            </button>
          </div>
          <div data-modal-content>{content}</div>
          <div data-modal-footer>
            <button onClick={handleCancel}>Cancelar</button>
            <button onClick={handleConfirm} data-type="confirm">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;