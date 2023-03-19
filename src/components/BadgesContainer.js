import React from "react";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";
import AsideTitle from "./AsideTitle";

function BadgesContainer() {
	return (
		<div className="py-1">
			<AsideTitle title="Insígnias" amount="269" />
			<div 
				className="flex justify-center gap-8 pt-2 
				md:justify-between md:gap-0"
			>
				<img src={badge1} alt="Profile badge." className="h-10"/>
				<img src={badge2} alt="Profile badge." className="h-10"/>
				<img src={badge3} alt="Profile badge." className="h-10"/>
				<img src={badge4} alt="Profile badge." className="h-10"/>
			</div>
		</div>
	);
}

export default BadgesContainer;