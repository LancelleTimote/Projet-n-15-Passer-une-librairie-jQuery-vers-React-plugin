import React from "react";
import "./Modal.css";

function Modal({ onClose, message }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <h2 className="modal-message">{message}</h2>
      </div>
    </div>
  );
}

export default Modal;
