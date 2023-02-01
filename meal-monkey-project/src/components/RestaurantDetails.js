import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import { useRestaurantDetails } from "../utils/useRestaurantDetails";

const Restaurantrestaurant = () => {
	const { resId } = useParams();

	const restaurant = useRestaurantDetails(resId);

	if (!restaurant) return <h1>Loading...</h1>;

	return (
		<div className="restaurant-details">
			<div>
				<h1>{restaurant?.name}</h1>
				<img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="" />
				<h3>{restaurant?.area + ", " + restaurant?.city}</h3>
				<h4>{restaurant?.cuisines?.join(", ")}</h4>
				<p>{restaurant?.costForTwoMsg}</p>
				<h4>{restaurant?.avgRating} stars</h4>
			</div>
			<div>
				<ul>
					{Object.values(restaurant?.menu?.items).map((item) => (
						<li key={item.id}>{item?.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Restaurantrestaurant;
