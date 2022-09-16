import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import Button from "../button/Button";
import "./header.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useState } from "react";
import logo2 from "../../assets/images/logo2.png";
import { IconSearch, IconChevronRight } from "@tabler/icons";
import Form from "../form/Form";
import { useDispatch, useSelector } from "react-redux";
import { signUp,userSignUp } from "../../features/user/userSlice";

const menuItem = [
  { index: 0, text: "Services", path: "/services" },
  { index: 1, text: "News & Media", path: "/media" },
  { index: 2, text: "Carrers", path: "/carrers" },
];

const menuMb = [
  {
    index: 0,
    title: "Home",
    list: [
      { index: 0, desc: "Home1" },
      { index: 1, desc: "Home2" },
    ],
  },
  {
    index: 1,
    title: "Pages",
    list: [
      { index: 0, desc: "About Us" },
      { index: 1, desc: "Our Team" },
      { index: 2, desc: "Team Single" },
      {
        index: 3,
        desc: "Services",
        listDrop: [
          {
            index: 0,
            descDrop: "Single Service",
          },
          {
            index: 1,
            descDrop: "Double Service",
          },
        ],
      },
      {
        index: 4,
        desc: "Aervices",
        listDrop: [
          {
            index: 0,
            descDrop: "Single Service",
          },
          {
            index: 1,
            descDrop: "Double Service",
          },
        ],
      },
    ],
  },
  {
    index: 2,
    title: "Contact",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuDrop, setMenuDrop] = useState(false);
  const [menuDropTwo, setMenuDropTwo] = useState(false);
  const [indexDrop, setIndexDrop] = useState();
  const [indexDropTwo, setIndexDropTwo] = useState();
  const [openForm, setOpenForm] = useState(false);
  const headerRef = useRef(null);
  const menuMbRef = useRef(null);
  const iconMenuRef = useRef(null);
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();
  const signUpSelector = useSelector((state) => state.users.signUp);
  const userSignUpSelector = useSelector((state) => state.users.userSignUp);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    if (width > 991) {
      menuMbRef?.current?.classList.remove("active_modal");
      setMenu(false);
    }
  }, [width]);

  const activeLink = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  const isSticky = () => {
    if (window.scrollY > 50) {
      headerRef.current.classList.add("fixed");
    } else {
      headerRef.current.classList.remove("fixed");
    }
  };

  return (
    <>
      <div
        className={`header ${width <= 991 ? "bg-black" : ""}`}
        ref={headerRef}
      >
        <div className="container">
          {width <= 991 ? (
            <div className="header_mb">
              <span
                ref={iconMenuRef}
                onClick={() => setMenu(!menu)}
                className={`${
                  menu ? "header_icon active-menu" : "header_icon"
                }`}
              >
                <span className="middle"></span>
              </span>
              <img src={logo2} alt="logo mobile" />
              <div className="header_mb_search">
                <IconSearch />
              </div>
            </div>
          ) : (
            <div className="header_container">
              <div className="header_left">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="header_right">
                <ul>
                  {menuItem.map((item) => (
                    <li key={item.index}>
                      <NavLink className={activeLink} to={item.path}>
                        {item.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
                <Button className="btn-main">Connect with us</Button>
                {userSignUpSelector.username ? (
                  <div className="header_info" onClick={() => dispatch(userSignUp(""))}>
                    <p>{userSignUpSelector.username}</p>
                  </div>
                ) : (
                  <Button
                    className="btn-main"
                    onClick={() => dispatch(signUp(true))}
                  >
                    Register
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
        <div
          ref={menuMbRef}
          className={`${menu ? "header_menu active_modal" : "header_menu"}`}
        >
          <div
            className={`${
              menu ? "header_menu_bg active_mb" : "header_menu_bg"
            }`}
          >
            <Link to="/">
              <img src={logo2} alt="logo mobile" />
            </Link>
            <ul className="header_menu_item">
              {menuMb.map((item) => {
                const handleDropMenu = () => {
                  setIndexDrop(item.index);

                  setMenuDrop(!menuDrop);
                };
                return (
                  <li key={item.index}>
                    <div
                      className={`${
                        menuDrop && item.index === indexDrop
                          ? "header_menu_drop active"
                          : "header_menu_drop"
                      }`}
                      onClick={handleDropMenu}
                    >
                      {item?.list ? (
                        <>
                          {item.title}
                          <IconChevronRight
                            className={`${
                              menuDrop && item.index === indexDrop
                                ? "active_icon"
                                : ""
                            }`}
                          />
                        </>
                      ) : (
                        <NavLink to={item.title.toLowerCase()}>
                          {item.title}
                        </NavLink>
                      )}
                    </div>
                    <ul
                      className={`${
                        menuDrop && item.index === indexDrop
                          ? "header_menu_dropList active_drop"
                          : "header_menu_dropList"
                      }`}
                    >
                      {item?.list?.map((listItem) => {
                        let charLowerCase = listItem.desc
                          .split(" ")[0]
                          .charAt(0)
                          .toLowerCase();
                        let charList = listItem.desc.charAt(0);
                        let replace = listItem.desc
                          .replace(charList, charLowerCase)
                          .split(" ")
                          .join("");
                        const handleDropTwo = () => {
                          setMenuDropTwo(!menuDropTwo);
                          setIndexDropTwo(listItem.index);
                        };
                        return (
                          <li key={listItem.index}>
                            {listItem.listDrop === undefined ? (
                              <NavLink className={activeLink} to={replace}>
                                {listItem.desc}
                              </NavLink>
                            ) : (
                              <>
                                <span
                                  className={`${
                                    menuDropTwo &&
                                    listItem.index === indexDropTwo
                                      ? "header_menu_dropListTwo active"
                                      : "header_menu_dropListTwo"
                                  }`}
                                  onClick={handleDropTwo}
                                >
                                  {listItem.desc}
                                  <IconChevronRight
                                    className={`${
                                      menuDropTwo &&
                                      listItem.index === indexDropTwo
                                        ? "active_icon"
                                        : ""
                                    }`}
                                  />
                                </span>
                                <ul
                                  className={`${
                                    menuDropTwo &&
                                    listItem.index === indexDropTwo
                                      ? "header_menu_listTwo active_drop"
                                      : "header_menu_listTwo"
                                  }`}
                                >
                                  {listItem?.listDrop?.map((listTwo) => {
                                    let charLowerCase = listTwo.descDrop
                                      .split(" ")[0]
                                      .charAt(0)
                                      .toLowerCase();
                                    let charList = listTwo.descDrop.charAt(0);
                                    let replace = listTwo.descDrop
                                      .replace(charList, charLowerCase)
                                      .split(" ")
                                      .join("");
                                    return (
                                      <li key={listTwo.index}>
                                        <NavLink to={replace}>
                                          {listTwo.descDrop}
                                        </NavLink>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
            <span
              onClick={() => setMenu(!menu)}
              className={`${
                menu ? "header_close active-close" : "header_close"
              }`}
            >
              <span className="middle"></span>
            </span>
          </div>
        </div>
      </div>
      {signUpSelector && width > 991 ? <Form /> : ""}
    </>
  );
};

export default Header;
