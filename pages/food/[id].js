import { useRouter } from "next/router";
import { useState } from "react";
import Order from "../../components/Order";

const FoodPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isFiltOr, setIsFiltOr] = useState(true);

  return (
    <main className="foodPage">
      <div className="foodPage__addition">
        <div className="foodPage__addition__header">
          <div className="foodPage__addition__header__filter">
            <h4>Категории</h4>
          </div>
          <div className="foodPage__addition__header__order">
            <h4>Заказ</h4>
          </div>
        </div>
        <div className="foodPage__addition__element">
          <Order />
        </div>
      </div>
      <div className="foodPage__inner">
        <div className="foodPage__foodInfo">
          <h4>Борщ</h4>
          <img src="/PicLocation/2.jpg" alt=""/>
          <div className="foodPage__foodInfo__info">
            <p></p>
            <p></p>
          </div>
          <div className="foodPage__foodInfo__footer">
            <div className="foodPage__foodInfo__footer__Ingredients"></div>
            <div className="foodPage__foodInfo__footer__data"></div>
          </div>
        </div>
        <div className="foodPage__reviews"></div>
        <div className="foodPage__slider">
          <div className="foodPage__slider_food"></div>
          <div className="foodPage__slider_user"></div>

        </div>
        
      </div>
    </main>
  );
};

export default FoodPage;
