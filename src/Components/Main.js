import { useState } from "react";
import movies from "../data/movies.json";
import "./Main.css";

function Main() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    console.log("DOING SHIT", movieId);
    const newList = moviesToDisplay.filter((element) => {
      if (element.id !== movieId) {
        return true;
      } else {
        return false;
      }
    });
    setMoviesToDisplay(newList);
  };

  return (
    <div className="Main">
      <h1>Number of movies: {moviesToDisplay.length}</h1>
      {moviesToDisplay.map((movieObj) => {
        return (
          <div key={movieObj.id} className="card">
            <p>{movieObj.title}</p>
            <p>{movieObj.year}</p>
            <p>{movieObj.rating}</p>

            <button
              onClick={() => {
                deleteMovie(movieObj.id);
              }}
            >
              Delete this movie
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default Main;
