import React from "react";
import Group from "./Group";
import group1 from "../assets/group1.jpg";
import group2 from "../assets/group2.jpg";
import group3 from "../assets/group3.jpg";
import AsideTitle from "./AsideTitle";

function GroupsContainer() {
	return (
		<div className="pt-6">
			<AsideTitle title="Groups" amount="35" />
			<Group
				image={group1}
				title="Humble Games"
				members="143,807"
				main={true}
			/>
			<Group
				image={group2}
				title="United Gaming Clans"
				members="31,108"
				main={false}
			/>
			<Group
				image={group3}
				title="Reddit"
				members="207,990"
				main={false}
			/>
		</div>
	);
}

export default GroupsContainer;