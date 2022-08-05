import React, { Component } from "react";
import axios from "axios";
import Movie from "./movie";
import Footer from "./footer";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://movie-store-for-us.herokuapp.com/movies")
      .then((response) => {
        console.log(response);
        this.setState({ movies: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderMovies() {
    return this.state.movies.map((movie) => {
      return <Movie key={movie.id} movieData={movie} />;
    });
  }

  render() {
    return (
      <div className="home">
        <h1>Our Movies</h1>
        <div className="footer1">
          <Footer />
        </div>
        <div className="card-container">{this.renderMovies()}</div>
      </div>
    );
  }
}
