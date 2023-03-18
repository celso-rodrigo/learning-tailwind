import React from "react";
import Avatar from "./Avatar";
import avatar from "../assets/avatar.jpg";
import UserInfoAbout from "./UserInfoAbout";

function UserInfo() {
	return (
		<section
			className="h-44 w-100 p-4 flex"
		>
			<Avatar
				src={avatar}
				alt={"User avatar."}
				borderStyle="h-36 aspect-square border-4 border-pink-500
				 absolute ring ring-pink-500 rounded-lg
				  animate-pulse blur-sm"
				size="36"
			/>

			<UserInfoAbout />
		</section>
	);
}

export default UserInfo;