import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Logo = () => {
	return (
		<Link to={"/"}>
			<img
				className="h-20 rounded-full"
				src="https://img.freepik.com/premium-vector/monkey-logo-hotdog-food_228886-182.jpg?w=2000"
				alt="logo"
			/>
		</Link>
	);
};

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const { user } = useContext(UserContext);

	const cartItems = useSelector((state) => state.cart.items);

	return (
		<div className="flex justify-between items-center px-6 py-2 bg-blue-50 mb-5 rounded-b-2xl shadow-lg">
			<Logo />
			<div className="hidden md:block lg:block">
				<ul className="flex gap-6">
					<Link to={"/"}>
						<li>Home</li>
					</Link>
					<Link to={"/about"}>
						<li>About</li>
					</Link>
					<Link to={"/contact"}>
						<li>Contact</li>
					</Link>
					<Link to={"/instamart"}>
						<li>Instamart</li>
					</Link>
					<Link to={"/cart"}>
						<li>Cart - {cartItems?.length} items</li>
					</Link>
				</ul>
			</div>
			<div className="text-lg text-green-700">{user.name}</div>
			<div>
				{isLoggedIn ? (
					<button
						className="bg-red-500  py-2 rounded-xl text-white w-28"
						onClick={() => setIsLoggedIn(false)}
					>
						Logout
					</button>
				) : (
					<button
						className="bg-blue-700 py-2 rounded-xl text-white w-28"
						onClick={() => setIsLoggedIn(true)}
					>
						Login
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
