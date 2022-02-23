import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./detail.css";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const movieId = location.state;

  const tryRequire = (path) => {
    try {
      return require(`../../images/${path}.jpeg`);
    } catch (err) {
      return require(`../../images/defaultImage.jpeg`);
    }
  };

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      const response = await fetch(
        `https://code-challenge.spectrumtoolbox.com/api/movies/${movieId}`,
        {
          headers: {
            Authorization: "Api-Key q3MNxtfep8Gt",
          },
        }
      );
      const responseData = await response.json();
      const data = responseData.data;
      setLoading(false);
      responseData.message === "success"
        ? setMovie({
            title: data.title,
            id: data.id,
            genres: data.genres,
            releaseDate: data.releaseDate,
            description: data.description,
            moods: data.moods,
          })
        : setMovie("Not Found");
    };
    getMovie();
  }, [movieId]);

  if (loading) return "...Loading";
  else if (!movie) return "";
  else if (movie !== "Not Found") {
    return (
      <div className="container-wrap">
        <div className="movie-card-container">
          <div className="image-container">
            <img src={tryRequire(`${movie.id}`)} alt={movie.title} />
          </div>
          <div className="movie-info">
            <h2>Movie Details</h2>
            <div>
              <h1>{movie.title}</h1>
              <small>Released Date: {movie.releaseDate}</small>

              <p>{movie.description && movie.description.substring(0, 350)}</p>
              <div className="tags-container">
                Generes:{" "}
                {movie.genres.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  } else return "Not Found";
};

export default MovieDetail;
