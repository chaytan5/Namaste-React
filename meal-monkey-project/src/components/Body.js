import { useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { useRestaurants } from "../utils/useRestaurants";
import { useOnline } from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [filteredRestaurants, setFilteredRestaurants] = useRestaurants();
	const [allRestaurants] = useRestaurants();

	const isOnline = useOnline();

	const { user, setUser } = useContext(UserContext);

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
		<div className="m-2 lg:m-4">
			<div className="mb-4 text-center">
				<input
					className="p-3 m-4 w-[300px] drop-shadow-md rounded-xl outline-none ring-1 ring-zinc-400 focus:shadow-lg"
					type="text"
					placeholder="Search for restaurants here..."
					value={searchText}
					onChange={(event) => setSearchText(event.target.value)}
				/>
				<button
					className="border text-white px-6 mr-4 py-2.5 hover:bg-opacity-90 rounded-xl bg-red-500 drop-shadow-md"
					onClick={() => {
						const data = filterData(allRestaurants, searchText);
						setFilteredRestaurants(data);
					}}
				>
					Search
				</button>
				<input
					className="border-2 border-red-800 border-spacing-2 p-2 mr-4"
					type="text"
					value={user.name}
					onChange={(e) =>
						setUser({
							...user,
							name: e.target.value,
						})
					}
				/>
				<input
					className="border-2 border-yellow-500 border-spacing-2 p-2 mr-4"
					type="text"
					value={user.email}
					onChange={(e) =>
						setUser({
							...user,
							email: e.target.value,
						})
					}
				/>
			</div>

			<div className="flex flex-row flex-wrap">
				{allRestaurants?.length === 0 ? (
					<Shimmer />
				) : filteredRestaurants?.length === 0 ? (
					<h2>No restaurant found</h2>
				) : (
					filteredRestaurants?.map((restaurant) => (
						<Link
							className="m-5"
							to={`/restaurants/${restaurant.data.id}`}
							key={restaurant.data.id}
						>
							<RestaurantCard {...restaurant.data} />
						</Link>
					))
				)}
			</div>
		</div>
	);
};

export default Body;
