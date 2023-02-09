import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
	const { user } = useContext(UserContext);

	return (
		<div className="text-center m-20 ">
			<span className="font-semibold text-xl ">
				This app is developed by {user.name} : {user.email}
			</span>
		</div>
	);
};

export default Footer;
