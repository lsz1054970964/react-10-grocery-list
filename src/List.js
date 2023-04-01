import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import SingleItem from "./SingleItem";

const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default List;
