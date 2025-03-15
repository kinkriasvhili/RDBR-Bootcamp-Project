import styles from "../nav.module.css";

export default function EmployeeModal({ isModalOpen, closeModal }) {
  if (!isModalOpen) return null; // Hide modal when not open

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <h2>ახალი თანამშრომელი</h2>
        <p>შეიყვანეთ თანამშრომლის ინფორმაცია</p>
        <button className={styles.closeButton} onClick={closeModal}>
          დახურვა
        </button>
      </div>
    </div>
  );
}
