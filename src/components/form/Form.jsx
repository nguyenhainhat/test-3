import React from "react";
import "./form.scss";
import { useController, useForm } from "react-hook-form";
import logo from "../../assets/images/logo1.png";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signUp, userSignUp } from "../../features/user/userSlice";
import { useState } from "react";
import CryptoJS from "crypto-js";
import Button from "../button/Button";

const Form = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPass, setMatchPass] = useState(true);
  const [showPop, setShowPop] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  let mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const signUpSelector = useSelector((state) => state.users.signUp);

  const encrypt = (data, key) => {
    const privateKey = key;
    return CryptoJS.AES.encrypt(data, privateKey);
  };

  const decrypt = (cipherText, privateKey) => {
    return CryptoJS.AES.decrypt(cipherText, privateKey).toString(
      CryptoJS.enc.Utf8
    );
  };

  const onSubmit = async (data) => {
    const passwordEncode = encrypt(data.password, "secret key 123");
    setPassword(passwordEncode);
    const confirmPassword = encrypt(data.confirmPassword, "secret key 321");
    setConfirmPassword(confirmPassword);
    const decryptPass = decrypt(passwordEncode, "secret key 123");
    const decryptConfirmPassword = decrypt(confirmPassword, "secret key 321");
    console.log(decryptPass, decryptConfirmPassword)
    if (decryptPass !== decryptConfirmPassword) {
      setMatchPass(false);
    } else {
      setShowPop(true);
      dispatch(userSignUp(data));
    }
  };

  return (
    <div className="modal">
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form_item form_signIn">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="form_control">
              <label htmlFor="">Username:</label>
              <input
                {...register("username", { required: true })}
                placeholder="Name"
                className="form-input"
                type="text"
              />
            </div>
            <div className="form_control">
              <label htmlFor="">Email:</label>
              <input
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                placeholder="Email"
                className="form-input"
                type="email"
              />
            </div>
            {errors.email && <span>Invalid email</span>}

            <div className="form_control">
              <label htmlFor="">Password:</label>
              <input
                {...register("password", { minLength: 6 })}
                placeholder="Password"
                type="password"
                className="form-input"
              />
            </div>
            <div className="form_control">
              <label htmlFor="">Confirm Password:</label>
              <input
                {...register("confirmPassword", { minLength: 6 })}
                placeholder="Confirm password"
                type="password"
                className="form-input"
              />
            </div>
            {!matchPass && <span>Password no match</span>}
            <button type="submit" className="form-btn">
              Sign up
            </button>
          </div>
          <div className="form_close" onClick={() => dispatch(signUp(false))}>
            <FaTimes />
          </div>
        </form>
        <div className={`${showPop ? "success hide" : "success"}`}>
          <span>Register successfully</span>
          <Button onClick={() => dispatch(signUp(false))}>Ok</Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
