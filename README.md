# simple-modal-library

## Author

[Timoté Lancelle](https://github.com/LancelleTimote)

## Requirements

- React (version >= 18.2)
- Npm
- Editor : Visual Studio code recommended

## Descripton

React library : Modal

## Installation

Run :`npm install tlancelle-react-modal`

## How to use this component

```
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
```
