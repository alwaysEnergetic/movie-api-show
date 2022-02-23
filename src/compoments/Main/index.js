import React, { useState, useEffect } from "react";
import Table from "../Table";
import Dropdown from "../Dropdown";
import Search from "../Search";
import { GENRES } from "./constants/genres";
import { useNavigate } from "react-router-dom";

const Main = () => {
  // set states
  const [movies, setMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const formHandler = (value) => {
    let standardValue = value.toLowerCase();
    setActiveQuery(standardValue);
  };

  const clearSearch = () => {
    setActiveGenre("");
    setActiveQuery("");
  };

  const handleSelect = (e) => {
    const targetValue = e.target.value;
    setActiveGenre(targetValue);
  };

  const handleDetail = (id) => {
    navigate("/details", { state: id });
    return;
  };

  useEffect(() => {
    const filterSearch = (movie) => {
      if (activeQuery) {
        let standardTitle = movie.title.toLowerCase();
        let standardGenre = movie.genres.join().toLowerCase();
        if (
          standardTitle.includes(activeQuery) ||
          standardGenre.includes(activeQuery)
        ) {
          return movie;
        }
      } else {
        return movie;
      }
    };

    const filterGenre = (movie) => {
      if (activeGenre) {
        return movie.genres.join().includes(activeGenre);
      } else {
        return movie;
      }
    };

    let result = movies.filter(filterGenre);
    result = result.filter(filterSearch);
    setDisplayMovies(result);
  }, [activeGenre, activeQuery, movies]);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://code-challenge.spectrumtoolbox.com/api/movies",
        {
          headers: {
            Authorization: "Api-Key q3MNxtfep8Gt",
          },
        }
      );
      const responseData = await response.json();
      const data = responseData.data;
      setIsLoading(false);
      setMovies(data);
      setDisplayMovies(data);
    };
    getMovies();
  }, []);

  return (
    <>
      <Search formHandler={formHandler} clearSearch={clearSearch} />
      <Dropdown opts={GENRES} selectHandler={handleSelect} />
      <Table movies={displayMovies} handleDetail={handleDetail} />
      <h2>{isLoading ? "Loading" : ""}</h2>
    </>
  );
};

export default Main;
