import React, { useState } from "react";

function ToDoItem(props) {
  const [mark, setMark] = useState("false");

  function onChecked() {
    setMark((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div
      onDoubleClick={() => {
        props.onDoubleChecked(props.id);
      }}
      onClick={onChecked}
    >
      <li style={{ textDecoration: mark ? "none" : "line-through" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
