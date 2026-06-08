import React from "react";

function ToyCard({toy , onDeleteToy}) {
const { name, image } = toy;
const toyLikes = toy.likes !== undefined ? toy.likes : toy.Likes;

const handleDeleteClick = () => {
    fetch(`http://localhost:4000/toys/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          onDeleteToy(id);
        } else {
          console.error("Failed to delete the toy from backend.");
        }
      });
  };

  return (
    <div className="card" data-testid="toy-card">
      <h2>{"" /* Toy's Name */}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{toyLikes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
