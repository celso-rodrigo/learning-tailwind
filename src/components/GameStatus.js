import React from "react";
import PropTypes from "prop-types";
import GameBadgeContainer from "./GameBadgeContainer";

function GameStatus(props) {
	const {
		favGameBadge,
		favGameAchiviement,
		badgeName,
		xp,
		achievementAmount,
	} = props;

	return (
		<div className="flex gap-8">
			<GameBadgeContainer
				gameBadge={favGameBadge}
				badgeName={badgeName}
				xp={xp}
			/>
			<div
				className="w-1/2 flex flex-col font-light gap-2"
			>
				<div className="flex justify-around text-xs">
					<a 
						href="" 
						className="blue-link"
					>
								Progresso em conquistas
					</a>
					<p className="text-gray-500">
						{`${achievementAmount} de ${achievementAmount}`}
					</p>
				</div>
				<div className="w-full h-2 bg-fuchsia-800/50 rounded"/>
				<div
					className="flex gap-2"
				>
					<img
						src={favGameAchiviement} 
						alt="Favorite game achieviment."
						className="h-7"
					/>
					<img
						src={favGameAchiviement} 
						alt="Favorite game achieviment."
						className="h-7"
					/>
					<img
						src={favGameAchiviement} 
						alt="Favorite game achieviment."
						className="h-7"
					/>
					<img
						src={favGameAchiviement} 
						alt="Favorite game achieviment."
						className="h-7"
					/>
					<img
						src={favGameAchiviement} 
						alt="Favorite game achieviment."
						className="h-7"
					/>
				</div>
			</div>
		</div>
	);
}

GameStatus.propTypes = {
	favGameBadge: PropTypes.string.isRequired,
	favGameAchiviement: PropTypes.string.isRequired,
	badgeName: PropTypes.string.isRequired,
	xp: PropTypes.number.isRequired,
	achievementAmount: PropTypes.number.isRequired,
};

export default GameStatus;