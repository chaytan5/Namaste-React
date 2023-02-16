import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constants";
import { useRestaurantDetails } from "../utils/useRestaurantDetails";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantDetails = () => {
	const { resId } = useParams();
	const dispatch = useDispatch();

	const restaurant = useRestaurantDetails(resId);

	function handleAddItem(item) {
		dispatch(addItem(item));
	}

	if (!restaurant) return <h1>Loading...</h1>;
	return (
		<div className="w-[90%] md:w-[80%] lg:w-[70%] my-5 mx-auto flex lg:flex-row flex-col justify-evenly gap-10">
			<div className="mt-5 flex-none">
				<h1 className="font-bold text-4xl mb-4">{restaurant?.name}</h1>
				<img
					className="h-[200px] rounded-md mb-5 "
					src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
					alt="restaurant image"
				/>
				<h3 className="text-lg font-medium mb-2">
					{restaurant?.area + ", " + restaurant?.city}
				</h3>
				<h4>{restaurant?.cuisines?.join(", ")}</h4>
				<p className="mb-2">{restaurant?.costForTwoMsg}</p>
				<h4 className="font-semibold">{restaurant?.avgRating} stars</h4>
			</div>
			<div className="mt-8">
				<div className="font-semibold text-xl mb-4">Menu</div>
				<ul className="md:columns-2 lg:columns-2 ">
					{Object.values(restaurant?.menu?.items).map((item) => (
						<li className="list-disc list-inside" key={item.id}>
							{item?.name}{" "}
							<button
								className="p-1 ml-2 bg-green-50 rounded-md "
								onClick={() => handleAddItem(item)}
							>
								Add
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default RestaurantDetails;
