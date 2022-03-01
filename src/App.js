import "./App.css";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import { Routes, Route } from "react-router-dom";
import MovieView from "./components/MovieView";
import Error from "./components/Error";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2718de46302a3d65523d971e84212461&query=${searchText}&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <>
      <NavBar searchText={searchText} setSearchText={setSearchText} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:id" element={<MovieView />} />

        <Route
          path="/search"
          element={
            <Search keyword={searchText} searchResults={searchResults} />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
