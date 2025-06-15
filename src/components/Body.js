import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import RestaurantCard, {
  withPromotedLabel,
} from "../components/ResturantCard";
import useOnlineStatus from "../utils/useOnlineStatus";
import { colors } from "../ui-tokens";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // HOC for promoted flag
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  /* ------------------- data fetch ------------------- */
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9031138&lng=77.6413963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();
      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    };
    fetchData();
  }, []);

  /* ------------------- offline check ------------------- */
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <main className="page flex h-[60vh] items-center justify-center">
        <p className="text-lg font-semibold">
          ⚠️ Menu is not available offline.
        </p>
      </main>
    );
  }

  /* ------------------- handlers ------------------- */
  const handleSearch = () => {
    const q = searchText.trim().toLowerCase();
    setFilteredRestaurants(
      listOfRestaurants.filter((r) =>
        r.info?.name?.toLowerCase().includes(q)
      )
    );
  };

  const handleTopRated = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((r) => (r.info.avgRating || 0) >= 4.4)
    );
  };

  /* ------------------- render ------------------- */
  return (
    <main className="page">
      {/* ▸ search + filter bar */}
      <section className="section flex flex-wrap items-center gap-4">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search restaurants…"
          className="min-w-[180px] flex-1 rounded-lg border border-gray-300 px-4 py-2
                     shadow-sm focus:border-indigo-500 focus:outline-none"
        />

        <button
          onClick={handleSearch}
          className={`rounded-lg bg-${colors.brand} px-4 py-2 text-white
                      hover:bg-${colors.brandHover}`}
        >
          Search
        </button>

        <button
          onClick={handleTopRated}
          className="rounded-lg bg-emerald-100 px-4 py-2 text-emerald-800 hover:bg-emerald-200"
        >
          ⭐ Top Rated
        </button>
      </section>

      {/* ▸ grid of restaurant cards */}
      <section
        className="grid gap-6 pb-10
                   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {filteredRestaurants.map((restaurant) => {
          const Card = restaurant.info.promoted
            ? RestaurantCardPromoted
            : RestaurantCard;
          return (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
            >
              <Card resData={restaurant} />
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Body;
