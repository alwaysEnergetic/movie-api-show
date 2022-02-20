import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  React.useEffect(() => {
    getMovies();
  });

  const getMovies = async () => {
    const response = await fetch(
      "https://code-challenge.spectrumtoolbox.com/api/movies",
      {
        headers: {
          Authorization: "Api-Key q3MNxtfep8Gt",
        },
      }
    );

    const responseData = await response.json();
    const { data } = responseData;
    console.log("----------", data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
