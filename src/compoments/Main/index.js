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

  return <h1>Charter/Spectrum Front-End Code Challenge</h1>;
};

export default Main;
