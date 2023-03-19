import React from "react";
import Avatar from "./Avatar";
import avatar from "../assets/avatar.jpg";
import UserInfoAbout from "./UserInfoAbout";

function UserInfo() {
	return (
		<section
			className="flex flex-col items-center gap-2 pl-2 w-5/6 m-auto pt-8 
			md:justify-start md:w-2/3 md:pt-4 md:flex-row md:h-44 md:gap-0"
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