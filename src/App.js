import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import Form from "./Form";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    list = JSON.parse(localStorage.getItem("list"));
  } else {
    list = [];
  }
  return list;
};

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

function App() {
  //const [items, setItems] = useState(defaultList);
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (itemName) => {
    const newItem = { name: itemName, completed: false, id: nanoid() };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    console.log(items);
    toast.success("Item has been added!");
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id != itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("Item has been deleted!");
  };

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  return (
    <section className="section-center">
      <ToastContainer position="center-top" />
      <Form addItem={addItem} />
      <List items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  );
}

export default App;
