import { createPortal } from "react-dom";
import styles from "../../CSS/Modal.module.css";
function Modal({ children, closeModal }) {
  return createPortal(
    <>
      <div className={styles.modalBackdrop} onClick={closeModal}></div>
      <div className={styles.modalContent}>{children}</div>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
