import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const location = useLocation();
  const movieId = location.state;

  const response = await fetch(
    "https://code-challenge.spectrumtoolbox.com/api/movies/movieId",
    {
      headers: {
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    }
  );
  const responseData = await response.json();
  const { movies } = responseData;
  console.log("--------------movies------------", movies);
  return (
    <>
      <h1>Movie Detail</h1>
    </>
  );
};

export default MovieDetail;
