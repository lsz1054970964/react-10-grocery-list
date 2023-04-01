import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("No item! Please input one item.");
      return;
    }
    console.log(newItemName);
    addItem(newItemName);
    setNewItemName("");
  };
  return (
    <div className="grocery-form">
      <h3>grocery bud</h3>
      <form className="form-control" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
        ></input>
        <button type="submit" className="submit-btn">
          add
        </button>
      </form>
    </div>
  );
};

export default Form;
