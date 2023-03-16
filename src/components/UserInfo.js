import React from "react";
import Avatar from "./Avatar";
import avatar from "../assets/avatar.jpg";
import UserInfoAbout from "./UserInfoAbout";

function UserInfo() {
	return (
		<section
			className="h-44 w-100 bg-slate-500 p-4 flex"
		>
			<Avatar
				src={avatar}
				alt={"User avatar."}
				avatarStyle={
					"h-36 aspect-square h-36 border-4 border-pink-400 rounded"}
			/>

			<UserInfoAbout />
		</section>
	);
}

export default UserInfo;