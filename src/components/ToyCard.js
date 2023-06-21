import React from "react";

function ToyCard({toy, deleteToy, updateLikes, index}) {
  const {name, image, likes} = toy;
  return (
    <div className="card">
      <h2>{name/* Toy's Name */}</h2>
      <img
        src={image /* Toy's Image */}
        alt={name /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={()=>updateLikes(toy.id, index)}>Like {"<3"}</button>
      <button className="del-btn" onClick={e=>deleteToy(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
