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
			className="px-2 md:h-full md:w-4/12"
		>
			<BlackBgEffect>
				<div className="flex flex-col gap-4 md:gap-0">
					<p 
						className="text-center text-lg text-gray-400 
					md:pb-7 md:text-left"
					>
					Offline
					</p>
					<AwardContainer />
					<BadgesContainer />
					<ProfileLinks />
					<GroupsContainer />
					<FriendsContainer />
				</div>
			</BlackBgEffect>
		</aside>
	);
}

export default AsideProfile;