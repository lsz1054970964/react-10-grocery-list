import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  //const [isCheck, setIsCheck] = useState(false);
  return (
    <article className="grocery-item">
      <input
        type="checkbox"
        value={item.completed}
        onChange={() => {
          editItem(item.id);
          //console.log(isCheck);
        }}
      ></input>
      <h5
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "line-through",
        }}
      >
        {item.name}
      </h5>
      <button
        className="clear-btn"
        type="btn"
        onClick={() => removeItem(item.id)}
      >
        remove
      </button>
    </article>
  );
};

export default SingleItem;
