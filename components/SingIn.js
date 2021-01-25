import React, { useState } from "react";
import Link from "next/link";

const SingIn = ({ close }) => {
  
  return (
    <div className="modal">
      <div className="modal__sign">
        <div className="modal__sign__close" onClick={close}>
          <img src="/close.svg" alt="" />
        </div>
        <div className="modal__sign__header">
          <h2>Войти</h2>
          <p>Войдите или создайте новый аккаунт</p>
        </div>
        <form className="modal__sign__form">
          <div className="modal__sign__form__items">
            <div className="modal__sign__form__items__item">
              <label>Имя Пользователя</label>
              <input type="text" placeholder="Ваше Имя" />
            </div>
            <div className="modal__sign__form__items__item">
              <label>Пароль</label>
              <input type="password" placeholder="Пароль" />
            </div>
          </div>
          <p>Забыли пароль?</p>
          <button>Войти</button>
          <div className="modal__sign__form__footer">
            <Link href="/notAcc">
              <a>У вас нет аккаунта?</a>
            </Link>
            <Link href="/singUp">
              <a>Зарегистрироваться</a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
