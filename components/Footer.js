import React, { useState } from "react";
import Link from "next/link";

const Footer = ({}) => {
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="footer__location">
          <h1>Районы:</h1>
          <p>Алмалинский</p>
          <p>Бостандыкский</p>
          <p>Медеуский</p>
          <p>Наурызбайский</p>
          <p>Алатауский</p>
          <p>Турксибский</p>
        </div>
        <div className="footer__about">
          <h1>О Компании</h1>
          <Link href="/delivery">
            <a>Доставка</a>
          </Link>
          <Link href="/termsOfUse">
            <a>Пользовательское соглашение</a>
          </Link>
          <Link href="/directory">
            <a>Вопросы и Ответы</a>
          </Link>
          <Link href="/partner">
            <a>Стать партнером</a>
          </Link>
          <Link href="/forBusiness">
            <a>Еда для бизнеса</a>
          </Link>
          <Link href="/feedback">
            <a>Обратная связь</a>
          </Link>
        </div>
        <div className="footer__network">
          <img src="/IconFacebook.svg" alt="" />
          <img src="/IconVK.svg" alt="" />
          <img src="/IconInsta.svg" alt="" />
          <img src="/IconTwitter.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
