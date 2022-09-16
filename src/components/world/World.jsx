import React from "react";
import Button from "../button/Button";
import world1 from "../../assets/images/world1.png";
import world2 from "../../assets/images/world2.png";
import world3 from "../../assets/images/world3.png";
import world4 from "../../assets/images/world4.png";
import brand1 from "../../assets/images/brand-1.png";
import brand2 from "../../assets/images/brand-2.png";
import brand3 from "../../assets/images/brand-3.png";
import brand4 from "../../assets/images/brand-4.png";
import brand5 from "../../assets/images/brand-5.png";
import brand11 from "../../assets/images/brand-1-1.png";
import brand21 from "../../assets/images/brand-2-1.png";
import brand31 from "../../assets/images/brand-3-1.png";
import brand41 from "../../assets/images/brand-4-1.png";
import brand51 from "../../assets/images/brand-5-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./world.scss";

const img = [world1, world2, world3, world4];

const brand = [
  { index: 0, img1: brand1, img2: brand11 },
  { index: 1, img1: brand2, img2: brand21 },
  { index: 2, img1: brand3, img2: brand31 },
  { index: 3, img1: brand4, img2: brand41 },
  { index: 4, img1: brand5, img2: brand51 },
];

const World = () => {
  return (
    <>
      <section className="world">
        <div className="container">
          <div className="world_container">
            <div className="world_content skewY">
              <h2>
                TransMax Logistics Around <span className="text-main">the World</span>
              </h2>
              <p>
                Transmax is the world’s driving worldwide coordinations supplier
                — we uphold industry and exchange the worldwide trade of
                merchandise through land transport.
              </p>
              <p>
                Our worth added administrations guarantee the progression of
                products proceeds consistently and supply chains stay lean and
                streamlined for progress.
              </p>
              <Button className="btn-nobg">More About Us</Button>
            </div>
            <div className="world_img">
              {img.map((item) => (
                <div className="world_img_item">
                  <img src={item} alt="img world" srcset="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="brand">
        <div className="container">
          <div className="brand_container">
            <Swiper
              slidesPerView={4}
              modules={[Navigation, Autoplay]}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
            >
              {brand.map((item) => {
                return (
                  <SwiperSlide key={item.index}>
                    <div className="brand_item">
                      <div className="brand_item_first">
                        <img src={item.img1} alt="img1" srcset="" />
                      </div>
                      <div className="brand_item_second">
                        <img src={item.img2} alt="img2" srcset="" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default World;
