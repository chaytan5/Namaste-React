import { IMG_CDN_URL } from "./constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
	return (
		<div className="w-[200px] min-h-full max-h-fit p-2 border-white border-2  rounded-lg hover:shadow-xl hover:border-gray-200">
			<img
				className="rounded-md mb-3"
				src={IMG_CDN_URL + cloudinaryImageId}
				alt={name}
			/>
			<h3 className="font-bold">{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<h4 className="font-medium">{avgRating} stars</h4>
		</div>
	);
};

export default RestaurantCard;
