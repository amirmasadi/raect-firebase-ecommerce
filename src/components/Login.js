import React, { useState } from "react";
import "./Login.css";
import { auth } from "../Firebase/FirebaseConfig";
import styled from "styled-components";
import SecHeading from "./SecHeading";

function Login() {
  //router
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = (event) => {
    event.preventDefault();
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((authUser) => {
          console.log("you loged in succsessfuly...");
        })
        .catch((error) => {
          alert(
            "Opps! something went wrong please check your console for more info"
          );
          console.error(error.message);
        });
    } else {
      alert("Please Enter all the fields");
    }
  };

  return (
    <ContactFormStyle className="login">
      <SecHeading
        subText="پنل ادمین"
        h3Text="ورود"
        headingPos="text-center"
      />
      <form className="login__form">
        <label>ایمیل</label>
        <input
          placeholder="ex.example@gmail.com"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label>رمز</label>
        <input
          placeholder="رمز"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit" onClick={loginUser}>
          ورود
        </button>
      </form>
    </ContactFormStyle>
  );
}

export default Login;

const ContactFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  label {
    color: var(--gray-1);
    font-size: 1.3rem;
    margin: 20px 0px;
  }
  input,
  textarea {
    width: 100%;
    background-color: var(--deep-dark);
    padding: 10px 10px 10px 30px;
    border-radius: 12px;
    outline: none;
    border: none;
    color: var(--gray-1);
    font-size: 21px;
  }
  button {
    font-size: 1.3rem;
    background-color: var(--gray-1);
    padding: 0.5em 1.7em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: var(--deep-dark);
    transition: all 0.3s ease;
    margin-top: 50px;
    &:hover {
      opacity: 0.9;
      transition: all 0.3s ease;
    }
  }
  @media only screen and (max-width: 768px) {
    .button,
    a {
      font-size: 1rem;
    }
    form {
      width: 90%;
    }
  }
`;
