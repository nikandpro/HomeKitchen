import React, { useState, useEffect } from "react";

const Order = ({ addFoods }) => {
  const [listUserFood, setListUserFood] = useState([
    {
      user: addFoods.user,
      listFood: [addFoods],
    },
  ]);


  useEffect(() => {
    // console.log("11", addFoods.length === 0);
    // console.log("12", listUserFood[0].user === undefined);
    // console.log("21", addFoods);
    // console.log("22", listUserFood);
    // console.log("23", listUserFood.length)

    let isFood = true;
    if (listUserFood[0].user === undefined && addFoods.length !== 0) {
      listUserFood[0].user = addFoods.user;
      listUserFood[0].listFood[0] = addFoods;
    } else if (listUserFood[0].user !== undefined) {
      // console.log("878",addFoods.user, "sfdf" ,listUserFood.includes(addFoods.user))
      listUserFood.map((item, index) => {
        // console.log("index=",index," len= ",listUserFood.length)
        if (item.user.id === addFoods.user.id) {
          // console.log("listFood=",item.listFood.includes(addFoods))
          if (!item.listFood.includes(addFoods)) {
            //нужен чтобы не было повторный записей
            item.listFood.push(addFoods);
          }
          isFood = false;
        } else if (index + 1 === listUserFood.length && isFood) {
          const list = {
            user: addFoods.user,
            listFood: [addFoods],
          };
          listUserFood.push(list);

        }
      });
    }
      localStorage.setItem("order", JSON.stringify(listUserFood));
  });
  return (
    <div className="order">
      <div className="order__inner">
        <div className="order__header">
          <h2>Мой заказ</h2>
        </div>
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

        {/* <div className="order__result">
          <div className="order__result__time">
            <p>Время готовки</p>
            <h3>15 - 25 мин.</h3>
          </div>
          <div className="order__result__sum">
            <p>Итог</p>
            <h3>1980 тг.</h3>
          </div>
        </div> */}

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

// import React, { useState, useEffect } from "react";
// const Order = (addFoods) => {
//   const [userList, setUserList] = useState([]);

 
//   useEffect(() => {
//     setUserList(addFoods);
//     console.log('fawfw', userList);
//   });
//   return (
//     <div>
//       <div>
//         {userList.length !== 0
//         <div>
//           {}
//         </div> 
        
//         : console.log("NO")
//         }
//       </div>
//     </div>
//   );
// };
// export default Order;
