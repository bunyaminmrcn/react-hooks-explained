import React, { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  //const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);
  useEffect(() => {
    //setRenderCount(prevRenderCount => prevRenderCount + 1)
    renderCount.current = renderCount.current + 1;
  });
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div> My name is {name}</div>
      <div> I rendered {renderCount.current} times</div>
    </>
  );
}
function App2() {
  const [name, setName] = useState("");
  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div> My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
export default App2;
