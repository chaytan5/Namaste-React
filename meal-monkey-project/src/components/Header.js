import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<a href="/">
			<img
				className="h-20 rounded-full"
				src="https://img.freepik.com/premium-vector/monkey-logo-hotdog-food_228886-182.jpg?w=2000"
				alt="logo"
			/>
		</a>
	);
};

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

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
					<li>Cart</li>
				</ul>
			</div>
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
