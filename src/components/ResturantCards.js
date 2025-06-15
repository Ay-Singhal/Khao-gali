import { useContext } from "react";
import { CON_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const ResturantCards = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    resData?.info || {};

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img className="res-img rounded-lg" src={CON_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg"> {name} </h3>
      <p>cuisines : {cuisines}</p>
      <p>average rating : {avgRating}</p>
      <p>delivery time : {deliveryTime} mins</p>
      <p>User : {loggedInUser}</p>
    </div>
  );
};

export const withPromotedLabel = (ResturantCards) => {
  return (props) => {
    return (
      <div>
        <p className="absolute bg-black text-white m-2 p-2 rounded-lg">
          PROMOTED
        </p>
        <ResturantCards {...props} />
      </div>
    );
  };
};

export default ResturantCards;
