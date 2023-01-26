import React from "react";
import ReactDOM from "react-dom/client"; // changed in ReactV18

// create a nested header element h1 h2 h3 inside a div with class title

const header = React.createElement("div", { className: "title" }, [
	React.createElement("h1", {}, "H1 from react element"),
	React.createElement("h2", {}, "H2 from react element"),
	React.createElement("h3", {}, "H3 from react element"),
]);

const header1 = (
	<div className="title">
		<h1>H1 from JSX</h1>
		<h2>H2 from JSX</h2>
		<h3>H3 from JSX</h3>
	</div>
);

const HeaderComponent = () => {
	return (
		<div className="title">
			{header1}
			<h1 className="h1">H1 title</h1>
			<h2>H2 title</h2>
			<h3>H3 title</h3>
		</div>
	);
};

const Nav = () => {
	return (
		<div className="navbar">
			<img
				className="logo"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
				alt="Apple logo"
			/>
			<input type="text" placeholder="search here..." />
			<img
				className="user-icon"
				src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
				alt="User icon"
			/>
		</div>
	);
};
// const Header = () => (
// 	<div>
// 		<h1>Hello world from JSX</h1>
// 		<p>This is a random paragraph....</p>
// 		<Header2 />
// 	</div>
// );

// const Header2 = () => {
// 	return (
// 		<div>
// 			<h2>This is header 2</h2>
// 			<p>Some text inside header 2</p>
// 		</div>
// 	);
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<>
		<Nav />
		<HeaderComponent />
	</>
);
