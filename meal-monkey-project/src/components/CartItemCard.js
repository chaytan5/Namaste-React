import { IMG_CDN_URL } from "./constants";

const CartItemCard = ({ name, cloudinaryImageId, price }) => {
	return (
		<div className="border border-black flex flex-row justify-between items-center mt-5 p-3 rounded-lg">
			<img
				className="rounded-md max-w-[150px]"
				src={IMG_CDN_URL + cloudinaryImageId}
				alt={name}
			/>
			<h3>{name}</h3>
			<span>₹ {price / 100}</span>
		</div>
	);
};

export default CartItemCard;
