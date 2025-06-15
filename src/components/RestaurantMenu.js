import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const onlineStatus = useOnlineStatus();

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  if (onlineStatus === false) {
    return <div>Menu is not available in offline mode.</div>;
  }

  return (
    // Display menu items as list items
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">Name : {name}</h1>
      <p className="font-bold">Cuisines : {cuisines.join(", ")}</p>
      <p className="font-bold">Cost For Two : {costForTwo / 100}</p>
      <p className="font-bold">Rating : {avgRating}</p>

      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
