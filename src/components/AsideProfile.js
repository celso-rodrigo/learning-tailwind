import React from "react";
import AwardContainer from "./AwardContainer";
import BadgesContainer from "./BadgesContainer";
import BlackBgEffect from "./BlackBgEffect";
import FriendsContainer from "./FriendsContainer";
import GroupsContainer from "./GroupsContainer";
import ProfileLinks from "./ProfileLinks";

function AsideProfile() {
	return (
		<aside
			className="w-4/12 px-2 h-full"
		>
			<BlackBgEffect>
				<p className="text-gray-400 pb-7">Offline</p>
				<AwardContainer />
				<BadgesContainer />
				<ProfileLinks />
				<GroupsContainer />
				<FriendsContainer />
			</BlackBgEffect>
		</aside>
	);
}

export default AsideProfile;