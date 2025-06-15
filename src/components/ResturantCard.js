// src/components/RestaurantCard.jsx
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CON_URL } from "../utils/constants";
import { colors } from "../ui-tokens";

/* -------------------------------------------------
   Centralised class strings
--------------------------------------------------*/
const CARD =
  "relative flex h-[350px] w-full flex-col overflow-hidden rounded-2xl \
   bg-white shadow-sm hover:shadow-lg transition";
const IMG = "h-40 w-full object-cover";
const TITLE = "font-semibold text-lg truncate";
const SUB = "text-sm text-gray-600 leading-tight";
const BADGE =
  "absolute top-2 left-2 rounded bg-black/70 px-2 py-[2px] text-[10px] \
   font-semibold tracking-wider text-white";

/* -------------------------------------------------
   Card component
--------------------------------------------------*/
const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId = "",
    name = "Unknown",
    avgRating = "--",
    cuisines = [],
    deliveryTime = "--",
  } = resData?.info || {};

  return (
    <div className={CARD}>
      <img
        src={CON_URL + cloudinaryImageId}
        alt={name}
        loading="lazy"
        className={IMG}
      />

      <div className="flex flex-1 flex-col gap-1 px-4 pb-4 pt-3">
        <h3 className={TITLE}>{name}</h3>

        <p className={SUB + " line-clamp-2"}>
          <span className="font-medium">Cuisines:&nbsp;</span>
          {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
        </p>

        <p className={SUB}>
          <span className="font-medium">Rating:&nbsp;</span>
          {avgRating} ⭐
        </p>

        <p className={SUB}>
          <span className="font-medium">ETA:&nbsp;</span>
          {deliveryTime} min
        </p>

        <p className={SUB}>
          <span className="font-medium">User:&nbsp;</span>
          {loggedInUser}
        </p>
      </div>
    </div>
  );
};

/* -------------------------------------------------
   HOC for “PROMOTED” label
--------------------------------------------------*/
export const withPromotedLabel = (Component) => (props) => (
  <div className="relative">
    <span className={BADGE}>PROMOTED</span>
    <Component {...props} />
  </div>
);

export default RestaurantCard;
