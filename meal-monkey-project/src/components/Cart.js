import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	if (!cartItems) return null;

	return (
		<div className="w-[90%] md:w-[80%] lg:w-[70%] my-5 mx-auto ">
			<h1 className="font-bold text-4xl">Cart</h1>
			<div>
				{cartItems?.length <= 0 ? (
					<h2 className="text-xl mt-5 font-semibold">
						Cart is empty. Add food from your fav restuarants
					</h2>
				) : (
					cartItems.map((item) => <CartItemCard key={item.id} {...item} />)
				)}
			</div>
		</div>
	);
};

export default Cart;
