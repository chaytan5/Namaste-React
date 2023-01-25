import React from "react";
import ReactDOM from "react-dom/client"; // changed in ReactV18

const heading = React.createElement(
	"h1",
	{
		style: { color: "red", backgroundColor: "wheat", fontSize: "100px" },
	},
	"Namaste Everyone from React"
);

// console.log(heading);

const heading1 = React.createElement("h1", {}, "Heading 1");
const heading2 = React.createElement("h2", {}, "Heading 2");

const container = React.createElement(
	"div",
	{
		id: "container",
	},
	[heading, heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
