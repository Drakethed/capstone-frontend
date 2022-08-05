import React, { useState } from "react";
import axios from "axios";
import Footer from "./footer";

export default function addMovie() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const postMovie = (event) => {
    axios
      .post("https://movie-store-for-us.herokuapp.com/add-movie", {
        title: title,
        genre: genre,
        price: price,
        description: description,
        image: Image,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    event.preventDefualt();
  };

  return (
    <div className="add-movie">
      <h1 className="add-movie-title">Add a movie!</h1>

      <form className="add-movie-form" onSubmit={postMovie}>
        <div className="online-movie-store">
          <input
            className="add-movie-form-input form-input"
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder=" Title"
          />
          <input
            className="add-movie-form-input form-input"
            onChange={(event) => setGenre(event.target.value)}
            type="text"
            placeholder=" Genre"
          />
          <input
            className="add-movie-form-input form-input"
            onChange={(event) => setPrice(event.target.value)}
            type="number"
            placeholder=" Price"
          />
        </div>
        <textarea
          className="add-movie-form-textarea form-input"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="  Description"
        />

        <button className="add-movie-form-button">Add movie!</button>
      </form>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  );
}
