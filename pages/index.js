import React, { useState } from "react";
import { fetchFood, fetchTag } from "../api/food";
import Filter from "../components/Filter";
import Goods from "../components/Goods";
import Order from "../components/Order";

// const [example, setExample] = useState(null);
const Main = ({ food, tag }) => {
  
  const [subFoods, setSubFoods] = useState([]);
  const [addFoods, setAddFoods] = useState([]);
  const toggleFood = (addFood) => {
    setAddFoods([...addFoods, addFood])
    console.log("123",addFoods)
  }

  return(
  <main className="container">
    <Filter tags={tag} sendSubFood={subFoods => setSubFoods(subFoods)} /> 

    <Goods food={subFoods.length > 0 ? subFoods : food} sendAddFood={addFood => toggleFood( addFood)} />

    <Order addFoods={addFoods}/>
  </main>
)};

export async function getServerSideProps() {
  const tag = await fetchTag();
  const food = await fetchFood();
  

  // console.log(tag);
//  console.log(food);
//  console.log(food[1])

  return {
    props: {
      tag,
      food,
    },
  };
}

export default Main;
