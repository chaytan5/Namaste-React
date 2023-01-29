import { useState } from "react";
import { restaurantList } from "./constants";
import RestaurantCard from "./RestaurantCard";

const filterData = (restaurants, searchText) => {
	const data = restaurants.filter((restaurant) =>
		restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
	);
	return data;
};

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [restaurants, setRestaurants] = useState(restaurantList);

	return (
		<>
			<div className="search-div">
				<input
					className="search-input"
					type="text"
					placeholder="Type here..."
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>
				<button
					className="search-btn"
					onClick={() => {
						const data = filterData(restaurants, searchText);
						setRestaurants(data);
					}}
				>
					Search
				</button>
			</div>

			<div className="container">
				{restaurants.map((restaurant) => (
					<RestaurantCard key={restaurant.data.id} {...restaurant.data} />
				))}
			</div>
		</>
	);
};

export default Body;
