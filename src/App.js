import { useState } from "react";
import movies from "./data/movies.json";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./App.css";
import AddMovie from "./Components/AddMovie";

function App() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const createMovie = (newMovie) => {
    const newList = [newMovie, ...moviesToDisplay]; //new list = an array with the new movie + all the movies
    setMoviesToDisplay(newList); //update state
  };

  const deleteMovie = (movieTitle) => {
    console.log("deleting movie with id....", movieTitle);
    //moviesToDisplay.push(); // NEVER MODIFY STATE DIRECTLY !
    const newList = moviesToDisplay.filter((element) => {
      return element.title !== movieTitle;
    });
    setMoviesToDisplay(newList);
  };

  return (
    <div className="App">
      <Header numberOfMovies={moviesToDisplay.length} />

      <AddMovie callBackToCreate={createMovie} />

      <Main listOfMovies={moviesToDisplay} callbackToDelete={deleteMovie} />

      <Footer />
    </div>
  );
}

export default App;
