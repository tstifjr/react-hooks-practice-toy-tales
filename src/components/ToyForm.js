import React, { useState } from "react";

const initForm = { name: '', image: '' }

function ToyForm({updateToyState}) {
  const [formData, setFormData] = useState(initForm);

  function handleChange (e){
    setFormData(curData => ({...curData, [e.target.name] : e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault();
    const newToy = {name : formData.name, image : formData.image, likes : 0}
    console.log(newToy);
    fetch ('http://localhost:3001/toys',{
      method : "POST",
      headers : {"Content-Type" : 'application/json'},
      body : JSON.stringify(newToy)
    })
    .then(r=>r.json())
    .then(data=>updateToyState(data))
    
    setFormData(initForm);
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value={formData.name}
        />
        <br />
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
