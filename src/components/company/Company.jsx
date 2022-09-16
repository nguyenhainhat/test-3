import React from "react";
import Button, { OrangeButton } from "../button/Button";
import user1 from "../../assets/images/company-1.jpg";
import user2 from "../../assets/images/company-2.jpg";
import user3 from "../../assets/images/company-3.jpg";
import logo from "../../assets/images/logo2.png";
import banner from "../../assets/images/logistics-1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./company.scss";

const companyItem = [
  {
    index: 0,
    head: "“Great Work!”​",
    desc: "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    img: user1,
    name: "Anna Ingrosso",
    title: "client of company",
  },
  {
    index: 1,
    head: "“Perfect Results!”​",
    desc: "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    img: user2,
    name: "Tomm Skywalker",
    title: "client of company",
  },
  {
    index: 2,
    head: "“Awesome!”​",
    desc: "I work in project management and joined Unicoach because I get great courses for less. The instructors are fantastic, interesting, and helpful. I plan to use for a long time!",
    img: user3,
    name: "Harold Perish",
    title: "client of company",
  },
];

const Company = () => {
  return (
    <>
      <section className="company">
        <div className="container">
          <div className="company_container">
            <div className="company_left skewY">
              <h2>
                People Say About Our<span className="text-main"> Company</span>
              </h2>
              <p>
                Transmax is the world’s driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade.
              </p>
              <Button className="btn-main">all testimonials</Button>
            </div>
            <div className="company_right">
              <Swiper
                slidesPerView={1}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                modules={[Pagination]}
                spaceBetween={20}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                {companyItem.map((item) => {
                  return (
                    <SwiperSlide key={item.index}>
                      <div className="company_right_item">
                        <h2>{item.head}</h2>
                        <p>{item.desc}</p>
                        <div className="company_right_info">
                          <img src={item.img} alt={item.name} />
                          <div className="company_right_desc">
                            <h3>{item.name}</h3>
                            <p>{item.title}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="swiper-pagination" slot="pagination"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="logistics" style={{ backgroundImage: `url(${banner})` }}>
        <div className="logistics_container">
          <img src={logo} alt="logo" />
          <h2>World’s Leading Contract Logistics Provider</h2>
          <OrangeButton> Connect with us </OrangeButton>
        </div>
      </div>
    </>
  );
};

export default Company;
