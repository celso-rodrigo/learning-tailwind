import React from "react";
import AsideProfile from "./AsideProfile";
import MainProfile from "./MainProfile";

function Profile() {
	return (
		<div
			className="bg-gradient-to-r from-teal-900/90 to-pink-900/90 
			 w-2/4 h-full flex"
		>
			<MainProfile />
			<AsideProfile />
		</div>
	);
}

export default Profile;