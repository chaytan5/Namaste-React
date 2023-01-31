import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<a href="/">
			<img
				className="logo"
				src="https://img.freepik.com/premium-vector/monkey-logo-hotdog-food_228886-182.jpg?w=2000"
				alt="logo"
			/>
		</a>
	);
};

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<div className="header">
			<Logo />
			<div className="nav-items">
				<ul>
					<Link to={"/"}>
						<li>Home</li>
					</Link>
					<Link to={"/about"}>
						<li>About</li>
					</Link>
					<Link to={"/contact"}>
						<li>Contact</li>
					</Link>
					<li>Cart</li>
				</ul>
			</div>
			<div>
				{isLoggedIn ? (
					<button
						className="btn logout-btn"
						onClick={() => setIsLoggedIn(false)}
					>
						Logout
					</button>
				) : (
					<button className="btn login-btn" onClick={() => setIsLoggedIn(true)}>
						Login
					</button>
				)}
			</div>
		</div>
	);
};

export default Header;
