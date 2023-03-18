import React from "react";
import ProfileShowcase from "./ProfileShowcase";
import UserInfo from "./UserInfo";

function MainProfile() {
	return (
		<main
			className="w-8/12 h-full p-4"
		>
			<UserInfo />
			<ProfileShowcase title="Jogo favorito" />
		</main>
	);
}

export default MainProfile;