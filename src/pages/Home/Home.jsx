import React from "react";
import "./home.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Slider from "../../components/slider/Slider";
import World from "../../components/world/World";
import Services from "../../components/services/Services";
import Competence from "../../components/competence/Competence";
import Company from "../../components/company/Company";
import News from "../../components/news/News";

const Home = () => {
  return (
    <main>
      <Slider />
      <World />
      <Services />
      <Competence />
      <Company/>
      <News />
    </main>
  );
};

export default Home;
