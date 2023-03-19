import React from "react";
import LevelContainer from "./LevelContainer";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

function Friend(props) {
	const {image, name, status, levelBorderColor, level} = props;

	const userStatus = {
		1: "Disponível",
		0: "Off-line",
	};

	const statusColor = status
		? "text-blue-400"
		: "text-gray-500";

	return (
		<div 
			className="flex w-60 items-center py-1 justify-between 
      hover:bg-green-400/30 p-1 cursor-pointer md:w-full"
		>
			<div className="flex gap-2">
				<Avatar
					src={image}
					alt={`${name} avatar.`}
					mainAvatar={false}
					borderStyle={status}
				/>
				<div className="flex flex-col">
					<p className={`text-xs ${statusColor}`}>
						{name}
					</p>
					<p className={`text-xs ${statusColor}`}>
						{userStatus[status]}
					</p>
				</div>
			</div>
			<LevelContainer levelBorderColor={levelBorderColor} level={level} />
		</div>
	);
}

Friend.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	levelBorderColor: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
};

export default Friend;