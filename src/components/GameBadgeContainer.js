import React from "react";
import PropTypes from "prop-types";

function GameBadgeContainer(props) {
	const {
		gameBadge,
		badgeName,
		xp,
	} = props;

	return (
		<div
			className="flex p-2 gap-2 bg-stone-800 w-1/2 text-xs
						 text-white h-12"
		>
			<img
				src={gameBadge} 
				alt="Favorite game badge."
				className="h-8"
			/>
			<div className="flex flex-col">
				<p>{badgeName}</p>
				<p>{`${xp} XP`}</p>
			</div>
		</div>
	);
}

GameBadgeContainer.propTypes = {
	gameBadge: PropTypes.string.isRequired,
	badgeName: PropTypes.string.isRequired,
	xp: PropTypes.number.isRequired,
};

export default GameBadgeContainer;