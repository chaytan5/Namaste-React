import { useState, useEffect } from "react";

export const useRestaurants = () => {
	const [restaurants, setRestaurants] = useState([]);

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
			setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
		} catch (err) {
			console.log(err.message);
		}
	}

	return [restaurants, setRestaurants];
};
