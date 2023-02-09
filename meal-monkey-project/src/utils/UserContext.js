import { createContext } from "react";

const UserContext = createContext({
	user: {
		name: "Chetan",
		email: "chetan@gmail.com",
	},
});

UserContext.displayName = "UserContext";

export default UserContext;
