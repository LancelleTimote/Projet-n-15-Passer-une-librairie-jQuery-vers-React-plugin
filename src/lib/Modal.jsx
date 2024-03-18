import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

/**
 * Modal component.
 * @param {Object} props - The props object.
 * @param {function} props.onClose - Function to close the modal.
 * @param {string} props.message - The message to be displayed in the modal.
 * @returns {JSX.Element} - Rendered component.
 */
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

// PropTypes
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Modal;
