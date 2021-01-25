import React from "react";
import Link from "next/link";

const Food = ({ data, sendAddData }) => {
  return (
    <div className="food">
      <div className="food__inner">
        <div className="food__foto">
          <img
            src={
              data.location != null
                ? data.location
                : "/PicLocation/notFound.png"
            }
            alt=""
          />
        </div>
        <div className="food__info">
        <Link href={"/food/[id]"} as={`/food/${data.id}`} >
          <h4>{data.name}</h4>
        </Link>
          {/* <h4>{data.name}</h4> */}
          <p>1 порция</p>
          <div className="food__row">
            <h3>{data.price}</h3>
            <h5>тг.</h5>
            <div className="food__row__read">
              <input
                className="food__row__read__input"
                type="text"
                placeholder="0 шт."
              />

              <button className="food__row__read__addBut" onClick={() => sendAddData(data)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;
