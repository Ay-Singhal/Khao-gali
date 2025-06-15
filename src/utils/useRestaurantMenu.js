import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // Set up effect to fetch menu data when component mounts or resId changes
  // Fetch restaurant menu data from API or local storage
  useEffect(() => {
    fetchMenu();
  }, []);
  // Map through menu items and display them in a list
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
