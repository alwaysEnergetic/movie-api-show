import React from "react";
import { useLocation } from "react-router-dom";

const MovieDetail = () => {
  const location = useLocation();
  console.log("----------location---------", location.state);

  return (
    <>
      <h1>Movie Detail</h1>
    </>
  );
};

export default MovieDetail;
