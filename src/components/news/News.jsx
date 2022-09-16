import React from "react";
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";
import news4 from "../../assets/images/news4.jpg";
import news5 from "../../assets/images/news5.jpg";
import news6 from "../../assets/images/news6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./news.scss";

const newsItem = [
  {
    index: 0,
    img: news1,
    desc: ["CARGO", "LOGISTICS"],
    date: "June 18, 2021",
    author: "By Nina Brown",
    title: "Helping Companies in Their Green Transition",
    text: "With the cargo business blasting, financier firms are bouncing from...",
  },
  {
    index: 1,
    img: news2,
    desc: ["PACKAGE"],
    date: "June 29, 2021",
    author: "By Nina Brown",
    title: "Our Mission 2040: Zero Emissions",
    text: "With the cargo business blasting, financier firms are bouncing from...",
  },
  {
    index: 2,
    img: news3,
    desc: ["CARGO", "LOGISTICS"],
    date: "June 29, 2021",
    author: "By Nina Brown",
    title: "Key Logistics Trends in Life Sciences 2021",
    text: "With the cargo business blasting, financier firms are bouncing from...",
  },
  {
    index: 3,
    img: news4,
    desc: ["LOGISTICS", "PACKAGE"],
    date: "June 29, 2021",
    author: "By Nina Brown",
    title: "5 Benefits of Working with a Freight Broker",
    text: "With the cargo business blasting, financier firms are bouncing from...",
  },
  {
    index: 4,
    img: news5,
    desc: ["PACKAGE"],
    date: "June 29, 2021",
    author: "By Nina Brown",
    title: "Ways for Shippers to  Navigate the Road",
    text: "With the cargo business blasting, financier firms are bouncing from...",
  },
  {
    index: 5,
    img: news6,
    desc: ["DELIVERY", "LOGISTICS"],
    date: "June 29, 2021",
    author: "By Nina Brown",
    title: "6 Tips to Lowering Freight Shipping Costs",
    text: "With the cargo business blasting, financier firms are bouncing from...",
  },
];

const News = () => {
  return (
    <section className="news">
      <div className="container">
        <div className="news_container">
          <div className="news_content skewY">
            <h2>
              Our Latest <span className="text-main">News</span>
            </h2>
            <p>
              Transmax is the world’s driving worldwide coordinations supplier —
              we uphold industry and exchange the worldwide trade of merchandise
              through land transport.
            </p>
          </div>
          <div className="news_slide">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ el: ".swiper-pagination_new", clickable: true }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
            >
              {newsItem.map((item) => {
                return (
                  <SwiperSlide key={item.index}>
                    <div className="news_item">
                      <img src={item.img} alt={item.title} />
                      <div className="news_item_desc">
                        {item.desc.map((items,index) => (
                          <span key={items[index]}>{items}</span>
                        ))}
                      </div>
                      <div className="news_item_content">
                        <div className="news_item_info">
                          <span>{item.date}</span>
                          <span>{item.author}</span>
                        </div>
                        <h3>
                          <Link to="/">{item.title}</Link>
                        </h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className="swiper-pagination_new" slot="pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
