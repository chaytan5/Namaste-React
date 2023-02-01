import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../components/constants";

export const useRestaurantDetails = (resId) => {
	const [details, setDetails] = useState(null);

	useEffect(() => {
		getRestaurantDetails();
	}, []);

	async function getRestaurantDetails() {
		const data = await fetch(FETCH_MENU_URL + resId);
		const json = await data.json();
		setDetails(json.data);
	}

	return details;
};
