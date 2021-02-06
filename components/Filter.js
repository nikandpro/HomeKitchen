import Category from "./Category";
import React, { useState, useEffect } from "react";
import { fetchFoodForSubTag } from "../api/food";

const Filter = ({ tags, sendSubFood }) => {
  const [allSubtag, setAllSubtag] = useState([]);

  useEffect(() => {
    // localStorage.setItem("tags", tags)
  })

  const requestForSubtag = async (allSubtag) => {
    console.log(allSubtag)
    const subFood = await fetchFoodForSubTag(allSubtag);
    console.log(subFood);
    sendSubFood(subFood)
  };

  const toggleSubTag = (subtag) => {
    console.log(allSubtag.includes(subtag));
    
    if (allSubtag.includes(subtag)) {
      const index = allSubtag.indexOf(subtag);
      if (index > -1) {
         allSubtag.splice(index, 1);
      }
    } else {
      setAllSubtag([...allSubtag, subtag]);
    }
  };

  

  return (
    <div className="filter">
      <div className="filter__inner">
        <div className="filter__title">
          <h2>Категории</h2>
        </div>
        {tags.map((value, index) => {
          return (
            <Category
              tag={value}
              key={index}
              sendSubTag={(subtag) => toggleSubTag(subtag)}
            />
          );
        })}
        <button onClick={() => requestForSubtag(allSubtag)}>Найти</button>
      </div>
    </div>
  );
};

export default Filter;
