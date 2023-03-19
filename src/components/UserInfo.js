import React from "react";
import Avatar from "./Avatar";
import avatar from "../assets/avatar.jpg";
import UserInfoAbout from "./UserInfoAbout";

function UserInfo() {
	return (
		<section
			className="h-44 w-100 flex pt-4"
		>
			<Avatar
				src={avatar}
				alt={"User avatar."}
				borderStyle={2}
				mainAvatar={true}
			/>

			<UserInfoAbout />
		</section>
	);
}

export default UserInfo;