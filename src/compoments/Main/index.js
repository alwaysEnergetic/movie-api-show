import React, { useState, useEffect } from "react";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState("");
  const [actvieQuery, setActiveQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getMovies = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://code-challenge.spectrumtoolbox.com/api/restaurants",
      {
        headers: {
          Authorization: "Api-Key q3MNxtfep8Gt",
        },
      }
    );
    const responseData = await response.json();
    const { movies } = responseData;
    setIsLoading(false);
    console.log("--------------movies------------", movies);
    setMovies(movies);
    setDisplayMovies(movies);
  };

  const handleSelect = (e) => {
    const targetValue = e.target.value;
    setActiveGenre(targetValue);
  };

  const formHandler = (value) => {
    let standardValue = value.toLowerCase();
    setActiveQuery(standardValue);
  };

  const filterGenre = (movie) => {};

  const filterSearch = (movie) => {
    if (actvieQuery) {
      let standardTitle = movie.title.toLowerCase();
      let standardGenre = movie.genre;
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Search formHandler={formHandler} clearSearch={clearSearch} />
      <Dropdown name={"Genre"} opts={GENRES} selectHandler={handleSelect} />
      <Table props={displayMovies} />
      <h2>{isLoading ? "Loading" : ""}</h2>
    </>
  );
};

export default Main;
