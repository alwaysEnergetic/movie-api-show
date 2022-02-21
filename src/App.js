import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./compoments/Home";
import MovieDetail from "./compoments/MovieDetail";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<MovieDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
