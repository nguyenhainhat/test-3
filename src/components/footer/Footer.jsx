import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import "./footer.scss";

const footerItemLogo = [
  {
    index: 0,
    col: [
      {
        index: 0,
        img: logo,
        info: [
          {
            index: 0,
            title: "Address: ",
            text: "27 Division St, New York, NY 10002, USA",
          },
          {
            index: 1,
            title: "Website: ",
            text: "transmax.com",
          },
          {
            index: 2,
            title: "Email: ",
            text: "transmax@mail.com",
          },
          {
            index: 3,
            title: "Phone: ",
            text: "+8 (123) 152 25 45",
          },
        ],
      },
    ],
  },
  {
    index: 1,
    col: [
      {
        index: 1,
        head: "Our Services",
        info: [
          {
            index: 0,
            text: "Just-In-Time delivery",
          },
          {
            index: 1,
            text: "Time based service levels",
          },
          {
            index: 2,
            text: "Warehousing",
          },
          {
            index: 3,
            text: "Global stock transparency",
          },
          {
            index: 4,
            text: "Transport consolidation",
          },
        ],
      },
    ],
  },
  {
    index: 2,
    col: [
      {
        index: 1,
        head: "Industry Sectors",
        info: [
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
        ],
      },
    ],
  },
  {
    index: 3,
    col: [
      {
        index: 1,
        head: "Quick Links",
        info: [
          {
            index: 0,
            text: "How it Works",
          },
          {
            index: 1,
            text: "Help Link",
          },
          {
            index: 2,
            text: "Terms & Conditions",
          },
          {
            index: 3,
            text: "Contact Us",
          },
          {
            index: 4,
            text: "Privacy Policy",
          },
        ],
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_container">
          {footerItemLogo.map((item) => (
            <div className="footer_item" key={item.index}>
              {item.col.map((colItem) => {
                return (
                  <>
                    {item.index === 0 ? (
                      <div className="footer_logo">
                        <img key={0} src={colItem.img} alt="logo footer" />
                      </div>
                    ) : (
                      <h2 key={colItem.index}>{colItem.head}</h2>
                    )}
                    <div className="footer_list">
                      {colItem.info.map((list) => {
                        return (
                          <>
                            {item.index === 0 ? (
                              <p key={list.index}>
                                <b>{list.title}</b>
                                {list.text}
                              </p>
                            ) : (
                              <p>
                                <Link to="/">{list.text}</Link>
                              </p>
                            )}
                          </>
                        );
                      })}
                    </div>
                  </>
                );
              })}
            </div>
          ))}
        </div>
        <div className="footer_copyright">
          <p>
            Copyright © 2021 TransMax by <span className="text-main">WebGeniusLab.</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
