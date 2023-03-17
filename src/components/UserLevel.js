import React from "react";
import LevelContainer from "./AcountLevel";
import BlackBgEffect from "./BlackBgEffect";
import mainBadge from "../assets/main_badge.png";

function UserLevel() {
	return (
		<div className="flex flex-col gap-4 h-44 border p-4">
			<div className="flex gap-2">
				<h2 className="text-white text-lg">Level</h2>
				<LevelContainer border="border-green-500" level="141"/>
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