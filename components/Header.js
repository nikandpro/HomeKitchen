import React, { useState } from "react";
import Link from "next/link";
import SingUp from "../components/SingUp"
import SingIn from "./SingIn"

const Header = ({}) => {
  const [showSingUp, setSingUp] = useState(false);
  const [showSingIn, setSingIn] = useState(false);

  const closeSignUp = () => {
    setSingUp(false);
  };

  const closeSignIn = () => {
    setSingIn(false);
  };

  return (
    <div className="header">
      {showSingUp ? <SingUp close={closeSignUp} /> : null}
      {showSingIn ? <SingIn close={closeSignIn} /> : null}
      <div className="header__inner">
        <div className="header__logo">
          <img src="/logo.svg" alt="" />
        </div>
        <div className="header__tabs">
          <Link href="/map">
            <a>Карта</a>
          </Link>
          <Link href="/seller">
            <a>Продавцы</a>
          </Link>
          <Link href="/becomeseller">
            <a>Стать продавцом</a>
          </Link>
          <Link href="/personal">
            <a>Личный кабинет</a>
          </Link>
        </div>
        <div className="header__register">
          <button onClick={() => setSingIn(true)} >Войти</button>
          <button onClick={() => setSingUp(true)} >Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
