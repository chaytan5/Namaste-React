import { useState } from "react";

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
					<li>Home</li>
					<li>About</li>
					<li>Contact</li>
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
