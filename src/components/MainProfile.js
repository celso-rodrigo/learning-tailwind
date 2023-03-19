import React from "react";
import CommentsContainer from "./CommentsContainer";
import PlayedHistory from "./PlayedHistory";
import ProfileShowcase from "./ProfileShowcase";

function MainProfile() {
	return (
		<main
			className="w-full h-full px-4 flex flex-col gap-5 md:w-8/12 "
		>
			<ProfileShowcase title="Jogo favorito" />
			<PlayedHistory />
			<CommentsContainer />
		</main>
	);
}

export default MainProfile;