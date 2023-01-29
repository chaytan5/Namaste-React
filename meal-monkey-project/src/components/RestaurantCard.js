import { IMG_CDN_URL } from "./constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
	return (
		<div className="card">
			<img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
			<h3>{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<h4>{avgRating} stars</h4>
		</div>
	);
};

export default RestaurantCard;
