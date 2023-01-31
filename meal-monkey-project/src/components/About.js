import { Link, Outlet } from "react-router-dom";

const About = () => {
	return (
		<div>
			<h1>About Us</h1>
			<h2>This is the description of Meal Monkey project</h2>
			<div>
				<Link to={"profile"}>Click here</Link> to go to your Profile
			</div>
			<Outlet />
		</div>
	);
};

export default About;
