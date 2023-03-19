import React from "react";
import LevelContainer from "./LevelContainer";
import BlackBgEffect from "./BlackBgEffect";
import mainBadge from "../assets/main_badge.png";

function UserLevel() {
	return (
		<div className="flex flex-col m-auto gap-4 h-44 pt-4 pl-2 md:w-1/3">
			<div className="flex gap-2 justify-center md:justify-start">
				<h2 className="text-white text-lg">Nível</h2>
				<LevelContainer
					levelBorderColor="border-green-500"
					level="141"
				/>
			</div>
			<BlackBgEffect>
				<div className="flex">
					<img 
						src={mainBadge}
						alt="User main badge."
						className="h-12"
					/>
					<div className="p-2">
						<p className="text-xs text-white">
              Steam Grand Prix 2019
						</p>
						<p className="text-xs text-white">
              30.000 XP
						</p>
					</div>
				</div>
			</BlackBgEffect>
		</div>
	);
}

export default UserLevel;