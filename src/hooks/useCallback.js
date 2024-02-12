import React, { useState, useEffect, useCallback } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log("Updating items");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(
    (incrementer) => {
      return [
        number + incrementer,
        number + 1 + incrementer,
        number + 2 + incrementer,
      ];
    },
    [number],
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
