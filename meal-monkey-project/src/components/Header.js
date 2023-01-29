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
		</div>
	);
};

export default Header;
