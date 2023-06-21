import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toyArray, setToyArray}) {

  function deleteToy(id) {
    //remove from DOM
    const slimToyArr = toyArray.filter(toy => toy.id !== id)
    setToyArray(slimToyArr);

    //Delete from backend
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
      .then(r => r.json())
    //.then(data=>console.log(data))
  }

  function updateLikes(id, index) {
    const find = toyArray.find(toy=>toy.id === id)
    const likedToy = {...find};
    likedToy.likes = likedToy.likes + 1; //create copy with + 1 likes
    
    //updated backend
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({likes : likedToy.likes})
    })
    .then(r=>r.json())
    .then(data=>{
      setToyArray(curData=>[...curData.slice(0,index), data, ...curData.slice(index+1)]) //update DOM
    });
  }

  
    const renderToys = toyArray.map((toy, index) => <ToyCard toy={toy} key={toy.id} deleteToy={deleteToy} updateLikes={updateLikes} index={index}/>)
  return (
    <div id="toy-collection">{renderToys}</div>
  );
}

export default ToyContainer;
