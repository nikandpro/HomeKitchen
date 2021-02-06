import React, { useState } from "react";
import request from "../api/request";
import Link from "next/link";

const SingUp = ({ close }) => {
  const [eye, setEye] = useState({
    name: "Close",
    type: "password",
  });

  const [user, setUser] = useState({
    mail: "",
    password: "",
  });

  const handleForm = (type, value) => {
    setUser({
      ...user,
      [type]: value,
    });
  };

  const recordAuth = (user) => {
    console.log("record",user)
    localStorage.setItem("user", JSON.stringify(user))
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
          <h2>Вход</h2>
          <p>Войдите или создайте новый аккаунт</p>
        </div>
        <div className="modal__sign__form">
          <div className="modal__sign__form__items">
            <div className="modal__sign__form__items__item">
              <label>Почта</label>
              <input
                type="email"
                placeholder="Ваша Почта"
                value={user.mail}
                onChange={(e) => handleForm("mail", e.target.value)}
              />
            </div>
            <div className="modal__sign__form__items__item">
              <label>Пароль</label>
              <input
                type={eye.type}
                placeholder="Пароль"
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
            <div className="modal__sign__form__items__item__forget">
              <p>Забыли пароль?</p>
            </div>
          </div>
          <button onClick={() => recordAuth(user)}>Войти</button>
          <div className="modal__sign__form__footer">
            <Link href="/notAcc">
              <a>У вас нет аккаунта?</a>
            </Link>
            <Link href="/singUp">
              <a>Зарегистрироваться</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;

// import React, { useState } from "react";
// import Link from "next/link";

// const SingIn = ({ close }) => {

//   return (
//     <div className="modal">
//       <div className="modal__sign">
//         <div className="modal__sign__close" onClick={close}>
//           <img src="/close.svg" alt="" />
//         </div>
//         <div className="modal__sign__header">
//           <h2>Войти</h2>
//           <p>Войдите или создайте новый аккаунт</p>
//         </div>
//         <form className="modal__sign__form">
//           <div className="modal__sign__form__items">
//             <div className="modal__sign__form__items__item">
//               <label>Имя Пользователя</label>
//               <input type="text" placeholder="Ваше Имя" />
//             </div>
//             <div className="modal__sign__form__items__item">
//               <label>Пароль</label>
//               <input type="password" placeholder="Пароль" />
//             </div>
//           </div>
//           <p>Забыли пароль?</p>
//           <button>Войти</button>
//           <div className="modal__sign__form__footer">
//             <Link href="/notAcc">
//               <a>У вас нет аккаунта?</a>
//             </Link>
//             <Link href="/singUp">
//               <a>Зарегистрироваться</a>
//             </Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SingIn;
