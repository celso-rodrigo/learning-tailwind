import React from "react";
import CommentsContainer from "./CommentsContainer";
import PlayedHistory from "./PlayedHistory";
import ProfileShowcase from "./ProfileShowcase";
import UserInfo from "./UserInfo";

function MainProfile() {
	return (
		<main
			className="w-8/12 h-full px-4 flex flex-col gap-5"
		>
			<UserInfo />
			<ProfileShowcase title="Jogo favorito" />
			<PlayedHistory />
			<CommentsContainer />
		</main>
	);
}

export default MainProfile;