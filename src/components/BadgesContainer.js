import React from "react";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";

function BadgesContainer() {
	return (
		<div className="py-1">
			<h3 className="aside-title">
        Insígnias 
				<span className="aside-number">
          269
				</span>
			</h3>
			<div className="flex justify-around">
				<img src={badge1} alt="Profile badge." className="h-10"/>
				<img src={badge2} alt="Profile badge." className="h-10"/>
				<img src={badge3} alt="Profile badge." className="h-10"/>
				<img src={badge4} alt="Profile badge." className="h-10"/>
			</div>
		</div>
	);
}

export default BadgesContainer;