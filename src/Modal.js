import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { closeModal, isModalOpen, correct, questions } = useGlobalContext();
  return (
    <section
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <p>
          You've got {((correct / questions.length) * 100).toFixed(0)}%
          questions correctly.
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </section>
  );
};

export default Modal;
