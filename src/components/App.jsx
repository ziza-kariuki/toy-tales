import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  const handleAddToy = (newToy) => {
    setToys([...toys, newToy]);
  };

  useEffect(() => {
    fetch("http://localhost:4000/toys") 
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  const handleDeleteToy = (idToIdDelete) => {
    const updatedToys = toys.filter((toy) => toy.id !== idToIdDelete);
    setToys(updatedToys);
  };

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} onDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;
