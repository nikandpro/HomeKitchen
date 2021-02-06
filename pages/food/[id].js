import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchIDFood } from "../../api/food";
import Reviews from "../../components/SupportingСomponents/Reviews";

const FoodPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);

  // useEffect(() => {
  //   let data = JSON.parse(localStorage.getItem("order"));
  //   setData(data);
  // }, []);

  //const [isFiltOr, setIsFiltOr] = useState(true);

  // useEffect(()   => {
  //   getFood()
  // },[]);

  const getFood =  async () => {
    console.log("id",id)
    //console.log("user",JSON.parse(localStorage.getItem("user")))
    const food = await axios.get(`http://localhost:7123/food/get/${id}`, { 
      auth: {
        username: "admin",
        password: "admin"
      }
    })
    //console.log("food",food)
  }

  return (
    <main className="foodPage">
      <div className="foodPage__addition">
        <div className="foodPage__addition__header">
          <div className="foodPage__addition__header__filter">
            <h4>Категории</h4>
          </div>
          <div className="foodPage__addition__header__order">
            <h4>Мой Заказ</h4>
          </div>
        </div>
        <div className="foodPage__addition__element"></div>
      </div>
      <div className="foodPage__inner">
        <div className="foodPage__inner__foodInfo">
          <div className="foodPage__inner__foodInfo__info">
            <div className="foodPage__inner__foodInfo__info__header">
              <h4>Борщ</h4>
            </div>
            <div className="foodPage__inner__foodInfo__info__content">
              <img src="/ExampleIDFood.svg" alt="" />
              <div className="foodPage__inner__foodInfo__info__content__read">
                <h4>Описание:</h4>
                <p>Борщ — разновидность супа на основе свёклы, которая
                  <br/>
                   придаёт ему характерный красный цвет. Блюдо имеет 
                   <br/>
                   около дюжины разновидностей, что связано с разобщением
                   <br/>
                   в прошлом украинских земель, с существованием разных 
                   <br/>
                   частей украинского народа в России, Польше, Молдавии,
                   <br/>
                   Румынии, Чехословакии, с влиянием на формирование украинской 
                   <br/>
                   кухни различных кулинарных обычаев и вкусов.</p>
                <h5>Рейтинг</h5>
              </div>
            </div>
            <div className="foodPage__inner__foodInfo__info__footer">
              <div className="foodPage__inner__foodInfo__info__footer__ingred">
                <h5>Ингредиенты:</h5>
                <p>Лук, морковь, картошка, свекла, капуста, зелень,
                <br/>
                   томатная паста, сметана, соль, перец.</p>
              </div>
              <div className="foodPage__inner__foodInfo__info__footer__price">
                <h4>990 тг.</h4>
                <div className="foodPage__inner__foodInfo__info__footer__price__add">
                  <input type="text" placeholder="0 - 18 шт." />
                  <button>+</button>
                </div>
                <p>В наличии: </p>
              </div>
            </div>
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

      {/* <Reviews /> */}
    </main>
  );
};

export default FoodPage;
