import React, { useState } from "react";

const Category = ({ tag , sendSubTag }) => {
  
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  
  
  return (
    <div className="category">
      <div className="category__inner">
        <div className="category__name">
          <img src="/categ.svg" alt="" onClick={() => toggleMenu()}/>
          <h3>{tag.title}:</h3>
        </div>
        {
          isOpen ?
          <div >
          {tag.subTags.map((subTag, index) => {
            return (
              <div key={index} className="category__item">
                <input type="checkbox" value={subTag.id}
                onChange={() => sendSubTag(subTag.id)} />
                <label>{subTag.name}</label>
              </div>
            );
          })}</div> : null
        }
      </div>
    </div>
  );
};

export default Category;
