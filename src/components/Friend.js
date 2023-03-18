import React from "react";
import LevelContainer from "./LevelContainer";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

function Friend(props) {
	const {image, name, status, border, level} = props;

	const userStatus = {
		0: "Disponível",
		1: "Off-line"
	};

	const statusColor = status
		? "gray-500"
		: "blue-400";

	return (
		<div 
			className="flex w-full items-center py-1 justify-between 
      hover:bg-green-400/30 p-1 cursor-pointer"
		>
			<div className="flex gap-2">
				<Avatar
					src={image}
					alt={`${name} avatar.`}
					size="8"
					borderStyle={`border-2 border-${statusColor}`}
				/>
				<div className="flex flex-col">
					<p className={`text-xs text-${statusColor}`}>
						{name}
					</p>
					<p className={`text-xs text-${statusColor}`}>
						{userStatus[status]}
					</p>
				</div>
			</div>
			<LevelContainer border={border} level={level} />
		</div>
	);
}

Friend.propTypes = {
	image: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	border: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired,
};

export default Friend;