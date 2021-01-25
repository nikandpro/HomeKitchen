import React, { useState } from "react";

const Order = ({ addFoods }) => {
  const [listFood, setListFood] = useState([]);
  const req = (e) => {
    setListFood(e);
  };
  return (
    <div className="order">
      <div className="order__inner">
        <div className="order__header">
          <h2>Мой заказ</h2>
        </div>
        {addFoods ?
        addFoods.map((item, index) => {
          return (
            <div>
              <div className="order__items">
                <div className="order__items__person" key={index}>
                  <p>{item.user.fname}</p>
                </div>
                {/* <div className="order__items__item">
                  <div className="order__items__item__food">
                    <h3>{item.name}</h3>
                    <p className="order__items__item__food__name">1 шт.</p>
                  </div>
                  <h3>990 тг.</h3>
                </div> */}
                {addFoods.map((item2, index2) => {
                  if (item2.user.id == item.user.id)
                    return (
                      <div className="order__items__item">
                        <div className="order__items__item__food">
                          <h3>{item2.name}</h3>
                          <p className="order__items__item__food__name">
                            1 шт.
                          </p>
                        </div>
                        <h3>990 тг.</h3>
                      </div>
                    );
                  else null;
                })}
              </div>
            </div>
          );
        }): null}
        {/* <div className="order__items">
          <div className="order__items__person">
            <p>Светлана</p>
          </div>
          <div className="order__items__item">
            <div className="order__items__item__food">
              <h3>Борщ</h3>
              <p className="order__items__item__food__name">1 шт.</p>
            </div>
            <h3>990 тг.</h3>
          </div>
          <div className="order__items__item">
            <div className="order__items__item__food">
              <h3>Котлета по-киевски</h3>
              <p className="order__items__item__food__name">1шт.</p>
            </div>
            <h3>990 тг.</h3>
          </div>
        </div> */}
        <div className="order__result">
          <div className="order__result__time">
            <p>Время готовки</p>
            <h3>15 - 25 мин.</h3>
          </div>
          <div className="order__result__sum">
            <p>Итог</p>
            <h3>1980 тг.</h3>
          </div>
        </div>

        {/* <img src="/map.svg" alt="" /> */}
      </div>
      <div className="order__arrange">
        <button>Оформить заказ</button>
      </div>
      <div className="order__map">
        <img src="/map.svg" alt="" />
      </div>
    </div>
  );
};

export default Order;
