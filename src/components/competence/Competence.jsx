import React from "react";
import "./competence.scss";
import imgCompetence from "../../assets/images/competence-1.jpg";
import { Link } from "react-router-dom";
import {
  IconShoppingCartDiscount,
  IconSettings,
  IconWorld,
  IconMapPin,
} from "@tabler/icons";

const competenceList1 = [
  {
    index: 0,
    text: "Aerospace & Defense",
  },
  {
    index: 1,
    text: "Automotive",
  },
  {
    index: 2,
    text: "Cloud Computing",
  },
  {
    index: 3,
    text: "Fashion & Retail",
  },
  {
    index: 4,
    text: "Healthcare & Pharma",
  },
  {
    index: 5,
    text: "Marine Parts",
  },
];

const competenceList2 = [
  {
    index: 0,
    text: "Electronics Industry",
  },
  {
    index: 1,
    text: "Industrial & Manufacturing",
  },
  {
    index: 2,
    text: "Semicon & Solar",
  },
  {
    index: 3,
    text: "Oil & Gas Cargo",
  },
  {
    index: 4,
    text: "Energy & Chemicals",
  },
  {
    index: 5,
    text: "Engineering",
  },
];

const numbersList = [
  {
    index: 0,
    icon: <IconShoppingCartDiscount />,
    num: 300,
    head: "Warehouses Managed",
    text: "We help you mitigate supply chain disruptions.",
  },
  {
    index: 1,
    icon: <IconSettings />,
    num: 120,
    head: "Supply Engineers",
    text: "We help you mitigate supply chain disruptions.",
  },
  {
    index: 2,
    icon: <IconWorld />,
    num: 60,
    head: "Countries Covered",
    text: "We help you mitigate supply chain disruptions.",
  },
  {
    index: 3,
    icon: <IconMapPin />,
    num: 600,
    head: "Companies We Help",
    text: "We help you mitigate supply chain disruptions.",
  },
];

const Competence = () => {
  return (
    <>
      <div className="competence">
        <div className="container">
          <div className="competence_container">
            <div className="competence_content skewY">
              <h2>
                Our Industry-Explicit
                <span className="text-main"> Competence</span>
              </h2>
              <p>
                As one of the main suppliers of coordinations arrangements
                across the globe, TransMax has a massive arrangement of
                transport and agreement coordinations arrangements.
              </p>
              <div className="competence_list">
                <ul>
                  {competenceList1.map((item) => (
                    <li key={item.index}>
                      <Link to="/">{item.text}</Link>
                    </li>
                  ))}
                </ul>
                <ul>
                  {competenceList2.map((item) => (
                    <li key={item.index}>
                      <Link to="/">{item.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="competence_img">
              <img src={imgCompetence} alt="competence img" />
            </div>
          </div>
        </div>
      </div>
      <section className="numbers">
        <div className="container">
          <div className="numbers_container">
            <div className="numbers_content">
              <h2>
                Our Goals in <span className="text-main">Numbers</span>
              </h2>
              <p>
                Transmax is the world’s driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade of
                merchandise through land transport.
              </p>
            </div>
            <div className="numbers_box">
              {numbersList.map((item) => (
                <div key={item.index} className="numbers_box_item">
                  <div className="numbers_box_icon">{item.icon}</div>
                  <h2>{item.num}+</h2>
                  <h3>{item.head}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Competence;
