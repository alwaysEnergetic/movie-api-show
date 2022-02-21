import React, { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./detail.css";

const MovieDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movieId = location.state;

  // const response = await fetch(
  //   "https://code-challenge.spectrumtoolbox.com/api/movies/movieId",
  //   {
  //     headers: {
  //       Authorization: "Api-Key q3MNxtfep8Gt",
  //     },
  //   }
  // );
  // const responseData = await response.json();
  // const { data } = responseData;
  // console.log("--------------movies------------", data);

  const tryRequire = (path) => {
    try {
      return require(`../../images/${path}.jpg`);
    } catch (err) {
      return require(`../../images/default.jpg`);
    }
  };

  const sampleData = {
    message: "success",
    data: {
      id: "SP013515940000",
      title: "Promising Young Woman",
      description:
        "Nothing in Cassie's life is what it appears to be -- she's wickedly smart, tantalizingly cunning, and she's living a secret double life by night. Now, an unexpected encounter is about to give Cassie a chance to right the wrongs from the past.",
      duration: 6780,
      releaseDate: "2020-01-24",
      releaseYear: 2020,
      moods: ["Bleak", "Chilling", "Dark", "Dreamy", "Tense"],
      topCast: [
        {
          name: "Carey Mulligan",
          characterName: "Cassandra",
        },
        {
          name: "Laverne Cox",
          characterName: "Gail",
        },
        {
          name: "Bo Burnham",
          characterName: "Ryan",
        },
        {
          name: "Clancy Brown",
          characterName: "Stanley",
        },
        {
          name: "Jennifer Coolidge",
          characterName: "Susan",
        },
        {
          name: "Christopher Mintz-Plasse",
          characterName: "Neil",
        },
        {
          name: "Molly Shannon",
          characterName: "Mrs. Fisher",
        },
        {
          name: "Angela Zhou",
          characterName: "Todd",
        },
        {
          name: "Alison Brie",
          characterName: "Madison",
        },
        {
          name: "Connie Britton",
          characterName: "Dean Walker",
        },
        {
          name: "Emerald Fennell",
          characterName: null,
        },
      ],
      genres: ["Dark comedy", "Thriller"],
    },
  };

  const { title, id, releaseDate, genres, description, moods } =
    sampleData.data;

  return (
    <div className="container-wrap">
      <div className="movie-card-container">
        <div className="image-container">
          <img src={tryRequire(`${id}`)} alt={title} />
        </div>
        <div className="movie-info">
          <h2>Movie Details</h2>
          <div>
            <h1>{title}</h1>
            <small>Released Date: {releaseDate}</small>
            <h4 className="genres-container">
              Generes:{" "}
              {genres &&
                genres.map((item, index) => <span key={index}>{item}</span>)}
            </h4>
            <p>{description && description.substring(0, 350)}</p>
            <div className="tags-container">
              Moods:{" "}
              {moods &&
                moods.map((item, index) => <span key={index}>{item}</span>)}
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default MovieDetail;
