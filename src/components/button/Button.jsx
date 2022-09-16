import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Button = (props) => {
  
  return (
    <button
    type="submit"
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick(e => e.preventDefault()) : null}
    >
      {props.children}
      {props.arrow && <MdOutlineDoubleArrow className="btn_arrow" />}
    </button>
  );
};

export const OrangeButton = (props) => {
  return (
    <Button
      className={`btn-orange ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;