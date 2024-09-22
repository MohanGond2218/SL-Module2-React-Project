import React, { useState } from "react";

export default function ArraysState() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <button
        onClick={() => {
          setItems([
            ...items,
            { id: items.length, value: Math.round(Math.random() * 1) },
          ]);
        }}
      >
        Add a Number
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
