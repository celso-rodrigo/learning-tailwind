import React from "react";
import AsideProfile from "./AsideProfile";
import MainProfile from "./MainProfile";
import UserInfo from "./UserInfo";
import UserLevel from "./UserLevel";

function Profile() {
	return (
		<div
			className="flex bg-gradient-to-r from-teal-900/90 to-pink-900/90 
			 xl:w-2/4 md:w-3/4 h-full flex-col w-full"
		>
			<div 
				className="flex pb-0 flex-col px-2 
				md:pb-4 md:flex-row md:justify-between"
			>
				<UserInfo />
				<UserLevel />
			</div>
			<div className="flex">
				<MainProfile />
				<AsideProfile />
			</div>
		</div>
	);
}

export default Profile;