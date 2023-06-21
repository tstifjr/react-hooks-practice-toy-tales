import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(r => r.json())
      .then(data => setToyArray(data));
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function updateToyState(newToy) {
    setToyArray(curData => [...curData, newToy])
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm updateToyState={updateToyState} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toyArray={toyArray} setToyArray={setToyArray} />
    </>
  );
}

export default App;
