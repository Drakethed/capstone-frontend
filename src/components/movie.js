import React from "react";
import axios from "axios";

export default function Movie(props) {
  const deleteMovie = () => {
    console.log(props);
    axios
      .delete(`http://localhost:5000/movie/${props.movieData.id}`)
      .then((response) => console.log("success", response));
  };

  return (
    <div className="card">
      <img className="movie-img" src={props.movieData.img_url} />
      <h2>{props.movieData.title}</h2>
      <h3>{props.movieData.genre}</h3>
      <p>{props.movieData.price}</p>
      <h4>{props.movieData.description}</h4>
      <button className="delete" onClick={deleteMovie}>
        Delete
      </button>
    </div>
  );
}
