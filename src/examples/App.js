import React, { useState } from "react";
import Modal from "../lib/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal
          message={"Employee Created successfully !"}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
