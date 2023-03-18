import React from "react";
import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";

function AwardContainer() {
	return (
		<div className="py-1">
			<h3 className="text-xs text-white">
        Prêmios do perfil  
				<span className="text-lg font-light text-gray-400 pl-2">
          11
				</span>
			</h3>
			<div className="flex justify-around">
				<img src={award1} alt="Profile award." className="h-10"/>
				<img src={award2} alt="Profile award." className="h-10"/>
				<img src={award3} alt="Profile award." className="h-10"/>
				<img src={award4} alt="Profile award." className="h-10"/>
			</div>
		</div>
	);
}

export default AwardContainer;