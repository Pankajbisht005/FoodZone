import { useState } from "react";
import ItemList from "./itemlist";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // Toggle item visibility
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-10/12 md:w-6/12 mx-auto my-6 p-5 bg-white shadow-md rounded-lg transition duration-200 hover:shadow-xl">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-xl text-gray-800">
          {data.title} <span className="text-gray-500">({data.itemCards.length})</span>
        </span>
        <span className={`transition-transform transform ${showItems ? 'rotate-180' : 'rotate-0'}`}>
          ⬇️
        </span>
      </div>
      
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
