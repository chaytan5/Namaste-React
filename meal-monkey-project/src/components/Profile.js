import React from "react";
import UserContext from "../utils/UserContext";

class Profile extends React.Component {
	constructor(props) {
		super(props);
		console.log("constructor");
		this.state = {
			userInfo: null,
		};
	}

	async componentDidMount() {
		// best place to make an API call
		console.log("componentDidMount");
	}

	componentDidUpdate() {
		console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		console.log("unmounted");
	}

	render() {
		console.log("render");
		return (
			<div className="p-5 m-5">
				<h2>This is the profile of the user...</h2>
				<UserContext.Consumer>
					{({ user }) => (
						<>
							<div className="font-bold text-lg">
								User name: {user.name}
								<br />
								User email: {user.email}
							</div>
							<p>The above data is coming from UserContext</p>
						</>
					)}
				</UserContext.Consumer>
			</div>
		);
	}
}

export default Profile;
