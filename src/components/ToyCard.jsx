import React from "react";

function ToyCard({ toy, onDeleteToy ,onLikeToy}) {
  const { id, name, image } = toy;
  const currentLikes = toy.likes !== undefined ? toy.likes : toy.Likes;

  const handleLikeClick = () => {
    const newLikes = currentLikes + 1;
    const patchBody = toy.likes !== undefined ? { likes: newLikes } : { Likes: newLikes };
    fetch(`http://localhost:4000/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchBody),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        onLikeToy(updatedToy);
      });
  };


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
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{currentLikes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
