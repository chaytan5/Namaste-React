import React from "react";

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
			<div>
				<h2>This is the profile of the user...</h2>
			</div>
		);
	}
}

export default Profile;
