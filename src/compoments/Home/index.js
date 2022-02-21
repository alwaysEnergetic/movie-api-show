import React from "react";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
