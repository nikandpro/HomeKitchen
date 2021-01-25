import React, { useState } from "react";
import Food from "../components/Food";

const Goods = ({ food, sendAddFood }) => {

  const [addFood, setAddFood] = useState();
  return (
    <div className="list">
      <div className="list__inner">
        <div className="list__search">
          <input type="text" placeholder="Поиск..." />
        </div>
        <div className="list__foods">
          {food.map((value, index) => {
            return <Food data={value} key={index} sendAddData={addFood => sendAddFood(addFood)}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Goods;
