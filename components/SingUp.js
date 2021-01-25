import React, { useState } from "react";
import request from "../api/request";

const SingUp = ({ close }) => {
  const [eye, setEye] = useState({
    name: "Close",
    type: "password",
  });

  const [user, setUser] = useState({
    mail: "",
    password: "",
    status: "customer",
  });

  const handleForm = (type, value) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const handleClick = (user) => {
    request
      .post("/user/post", user)
      .then((res) => {
        console.log(res);
        close();
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("CHECK USER");
    console.log(user);
  };

  const togglePassword = () => {
    setEye({
      ...eye,
      name: eye.name === "Close" ? "Open" : "Close",
      type: eye.type === "text" ? "password" : "text",
    });
  };

  return (
    <div className="modal">
      <div className="modal__sign">
        <div className="modal__sign__close" onClick={close}>
          <img src="/close.svg" alt="" />
        </div>
        <div className="modal__sign__header">
          <h2>Регистрация</h2>
          <p>Войдите или создайте новый аккаунт</p>
        </div>
        <div className="modal__sign__form">
          <div className="modal__sign__form__items">
            <div className="modal__sign__form__items__item">
              <label>Почта</label>
              <input
                type="email"
                value={user.mail}
                // name="username"
                // onChange={(e) => updateField(e)}
                onChange={(e) => handleForm("mail", e.target.value)}
              />
            </div>
            <div className="modal__sign__form__items__item">
              <label>Пароль</label>
              <input
                type={eye.type}
                value={user.password}
                onChange={(e) => handleForm("password", e.target.value)}
              />
              <img
                className="modal__sign__form__items__item__eye"
                src={`/eye${eye.name}.svg`}
                alt=""
                onClick={() => togglePassword()}
              />
            </div>
            <div className="modal__sign__form__items__item__radio">
              <div>
                <label>Пользователь</label>
                <input
                  type="radio"
                  id="customer"
                  value="customer"
                  name="status"
                  onChange={(e) => handleForm("status", e.target.value)}
                />
              </div>
              <div>
                <label>Продавец</label>
                <input
                  type="radio"
                  id="seller"
                  value="seller"
                  name="status"
                  onChange={(e) => handleForm("status", e.target.value)}
                />
              </div>
            </div>
            {/* <div className="modal__sign__form__items__item">
              <label>Статус</label>
              <input
                type="text"
                value={user.status}
                onChange={(e) => handleForm("status", e.target.value)}
              />
            </div> */}
          </div>
          {/* <div>
            <img src="/tick.svg" alt=""/>
          </div> */}
          <button onClick={() => handleClick(user) }>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
