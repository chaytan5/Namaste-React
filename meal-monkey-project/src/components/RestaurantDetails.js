import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";

const RestaurantDetails = () => {
	const { resId } = useParams();
	const [details, setDetails] = useState(null);

	useEffect(() => {
		getRestaurantDetails();
	}, []);

	async function getRestaurantDetails() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/menu/v4/full?lat=28.6712458&lng=77.3176541&menuId=" +
				resId
		);
		const json = await data.json();
		setDetails(json.data);
	}

	if (!details) return <h1>Loading...</h1>;

	return (
		<div className="restaurant-details">
			<div>
				<h1>{details?.name}</h1>
				<img src={IMG_CDN_URL + details?.cloudinaryImageId} alt="" />
				<h3>{details?.area + ", " + details?.city}</h3>
				<h4>{details?.cuisines?.join(", ")}</h4>
				<p>{details?.costForTwoMsg}</p>
				<h4>{details?.avgRating} stars</h4>
			</div>
			<div>
				<ul>
					{Object.values(details?.menu?.items).map((item) => (
						<li key={item.id}>{item?.name}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantDetails;
