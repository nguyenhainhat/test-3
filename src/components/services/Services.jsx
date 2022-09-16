import React from "react";
import Button from "../button/Button";
import "./services.scss";
import { IconTruck, IconPlaneTilt, IconShip } from "@tabler/icons";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const servicesBox = [
  {
    index: 0,
    icon: <IconTruck />,
    head: "Land Transport",
    desc: "With a worldwide organization and progressed coordination arrangements, our airship cargo sending items.",
    boxItem: [
      "Part & Full Loads",
      "Multimodal Solutions",
      "Intermodal Solutions",
    ],
  },
  {
    index: 1,
    icon: <IconPlaneTilt />,
    head: "Air Freight",
    desc: "We help transport your load anyplace on the planet, making your business run easily regardless of where products.",
    boxItem: [
      "General Air Freight Products",
      "Charter Services",
      "Intermodal Solutions",
    ],
  },
  {
    index: 2,
    icon: <IconShip />,
    head: "Ocean Freight",
    desc: "Sea cargo dispatches in excess of 5,500 holders per day to ports all around the globe, making us a top forwarder.",
    boxItem: [
      "Less-than-container Load",
      "Full Container Load",
      "Intermodal Solutions",
    ],
  },
];

const elementorItem = [
  {
    index: 1,
    head: "Quality Management System",
    text: "With our worldwide inclusion, strong transportation organization and industry driving coordinations experience, our Service and Aftermarket Logistics arrangements.",
  },
  {
    index: 2,
    head: "E-commerce Logistics Solutions",
    text: "With our worldwide inclusion, strong transportation organization and industry driving coordinations experience, our Service and Aftermarket Logistics arrangements.",
  },
  {
    index: 3,
    head: "Service & Aftermarket Logistics",
    text: "With our worldwide inclusion, strong transportation organization and industry driving coordinations experience, our Service and Aftermarket Logistics arrangements.",
  },
  {
    index: 4,
    head: "Industry-Specific Competence",
    text: "With our worldwide inclusion, strong transportation organization and industry driving coordinations experience, our Service and Aftermarket Logistics arrangements.",
  },
];

const Services = () => {
  const { height, width } = useWindowDimensions();

  return (
    <>
      <section className="services">
        <div className="container">
          <div className="services_container skewY">
            <div className="services_content">
              <div className="services_content_main">
                <h2>
                  Explore Our <span className="text-main">Services</span>
                </h2>
                <p>
                  Transmax is the world’s driving worldwide coordinations
                  supplier — we uphold industry and exchange the worldwide trade
                  of merchandise through land transport.
                </p>
              </div>
              <Button className="btn-main">Explore More</Button>
            </div>
            <div className="services_box">
              {servicesBox.map((item) => (
                <div key={item.index} className="services_box_bg">
                  <div className="services_box_item">
                    <div className="services_box_icon">{item.icon}</div>
                    <h4>{item.head}</h4>
                    <p>{item.desc}</p>
                    <ul>
                      {item.boxItem.map((list, index) => (
                        <li key={list[index]}>{list}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {width > 1200 && (
        <section className="elementor">
          <div className="elementor_container">
            {elementorItem.map((item) => (
              <div key={item.index} className="elementor_item">
                <div className="elementor_item_content">
                  <h3>0{item.index}</h3>
                  <h2>{item.head}</h2>
                </div>
                <div className="elementor_item_hover">
                  <p>{item.text}</p>
                </div>
                <button className="elementor-btn">
                  <Link to="/">
                    <BsArrowRight />
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Services;
