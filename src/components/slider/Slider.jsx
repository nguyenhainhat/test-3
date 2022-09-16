import React from "react";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./slider.scss";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { IconTruckDelivery, IconBuildingWarehouse } from "@tabler/icons";

const slideItem = [
  {
    index: 0,
    text: "Flexible Logistics",
    text2: "& Cargo for Business",
    title:
      "We carry clearness to intricacy, separating basic subtleties from confounded data to make modern, direct arrangements.",
    img: slide1,
  },
  {
    index: 1,
    text: "Logistics Solutions",
    text2: "Around the World",
    title:
      "We carry clearness to intricacy, separating basic subtleties from confounded data to make modern, direct arrangements.",
    img: slide2,
  },
  {
    index: 1,
    text: "Smart & Simple",
    text2: "Warehousing",
    title:
      "We carry clearness to intricacy, separating basic subtleties from confounded data to make modern, direct arrangements.",
    img: slide3,
  },
];

const slideBox = [
  {
    index: 0,
    text: "Transport Solutions",
    title:
      "Our Transport Solutions assist your business with keeping up degrees of administration",
    icon: <IconTruckDelivery />,
  },
  {
    index: 1,
    text: "Warehousing Solutions",
    title:
      "Our Transport Solutions assist your business with keeping up degrees of administration",
    icon: <IconBuildingWarehouse />,
  },
];

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
      >
        {slideItem.map((item) => {
          const bgSlide = {
            backgroundImage: `url("${item.img}")`,
          };

          return (
            <SwiperSlide key={item.index}>
              <div className="slider_item" style={bgSlide}>
                <div className="container">
                  <div className="slider_item_container">
                    <h2>
                      {item.text} <br /> {item.text2}{" "}
                    </h2>
                    <p>{item.title}</p>
                    <div className="slider_item-btn">
                      <Button className="btn-orange">Explore more</Button>
                      <div className="slider_item-btn_desc">
                        <Link to="/">Speak with expert</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="slide_box">
        <div className="container">
          <div className="slide_box_container">
            {slideBox.map((item) => (
              <div key={item.index} className="slide_box_item">
                <div className="slide_box_icon">{item.icon}</div>
                <div className="slide_box_content">
                  <h3>{item.text}</h3>
                  <p>{item.title}</p>
                  <div className="slide_box_btn">
                    <Link to="/">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
