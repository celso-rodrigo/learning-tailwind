import React from "react";
import AwardContainer from "./AwardContainer";
import BadgesContainer from "./BadgesContainer";
import BlackBgEffect from "./BlackBgEffect";
import GroupsContainer from "./GroupsContainer";
import ProfileLinks from "./ProfileLinks";
import UserLevel from "./UserLevel";

function AsideProfile() {
	return (
		<aside
			className="w-4/12 h-10 px-2"
		>
			<UserLevel />
			<BlackBgEffect>
				<p className="text-gray-400 pb-7">Offline</p>
				<AwardContainer />
				<BadgesContainer />
				<ProfileLinks />
				<GroupsContainer />
			</BlackBgEffect>
		</aside>
	);
}

export default AsideProfile;