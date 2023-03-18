import React from "react";
import AsideTitle from "./AsideTitle";
import friend1 from "../assets/friend1.jpg";
import Friend from "./Friend";
import friend2 from "../assets/friend2.jpg";
import friend3 from "../assets/friend3.jpg";
import friend4 from "../assets/friend4.jpg";
import friend5 from "../assets/friend5.jpg";
import friend6 from "../assets/friend6.jpg";

function FriendsContainer() {
	return (
		<div className="flex flex-col pt-6">
			<AsideTitle title="Friends" amount="116" />
			<Friend
				image={friend1}
				name="Neidrocas" 
				status={0}
				border="border-purple-700" 
				level="62"
			/>
			<Friend
				image={friend6}
				name="mj" 
				status={1}
				border="border-yellow-400" 
				level="37"
			/>
			<Friend
				image={friend3}
				name="Bevastat" 
				status={1}
				border="border-red-700" 
				level="12"
			/>
			<Friend
				image={friend4}
				name="Bruxinha Agiota" 
				status={0}
				border="border-red-700" 
				level="14"
			/>
			<Friend
				image={friend5}
				name="PChristinye" 
				status={1}
				border="border-red-700" 
				level="12"
			/>
			<Friend
				image={friend2}
				name="Trapdoors" 
				status={0}
				border="border-red-700" 
				level="10"
			/>
		</div>
	);
}

export default FriendsContainer;