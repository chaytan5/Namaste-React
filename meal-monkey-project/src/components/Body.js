import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useRestaurants } from "../utils/useRestaurants";
import { useOnline } from "../utils/useOnline";

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [filteredRestaurants, setFilteredRestaurants] = useRestaurants();
	const [allRestaurants] = useRestaurants();

	const isOnline = useOnline();

	if (!isOnline)
		return (
			<div>
				<h1>
					It seems you are offline, check your internet connection ASAP...
				</h1>
			</div>
		);

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
						<Link
							to={`/restaurants/${restaurant.data.id}`}
							key={restaurant.data.id}
						>
							<RestaurantCard {...restaurant.data} />
						</Link>
					))
				)}
			</div>
		</>
	);
};

export default Body;
