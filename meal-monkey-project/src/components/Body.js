import { useEffect, useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const filterData = (restaurants, searchText) => {
	const data = restaurants.filter((restaurant) =>
		restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
	);
	return data;
};

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [allRestaurants, setAllRestaurants] = useState([]);

	useEffect(() => {
		fetchRestaurants();
	}, []);

	async function fetchRestaurants() {
		try {
			const data = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6712458&lng=77.3176541&page_type=DESKTOP_WEB_LISTING"
			);
			const json = await data.json();
			// optional chaining
			setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
			setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		} catch (err) {
			console.log(err.message);
		}
	}

	// Early return
	if (!allRestaurants) return null;

	return (
		<>
			<div className="search-div">
				<input
					className="search-input"
					type="text"
					placeholder="Search for restaurants here..."
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>
				<button
					className="search-btn"
					onClick={() => {
						const data = filterData(allRestaurants, searchText);
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
			</div>

			<div className="container">
				{allRestaurants?.length === 0 ? (
					<Shimmer />
				) : filteredRestaurants?.length === 0 ? (
					<h2>No restaurant found</h2>
				) : (
					filteredRestaurants?.map((restaurant) => (
						<RestaurantCard key={restaurant.data.id} {...restaurant.data} />
					))
				)}
			</div>
		</>
	);
};

export default Body;
