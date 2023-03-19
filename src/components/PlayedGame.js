import React from "react";
import BlackBgEffect from "./BlackBgEffect";
import PropTypes from "prop-types";
import GameBadgeContainer from "./GameBadgeContainer";

function PlayedGame(props) {
	const {
		gameImage,
		gameName,
		playTime,
		lastPlayed,
		gameBadge,
		badgeName,
		xp
	} = props;
  
	return (
		<BlackBgEffect>
			<div className="flex flex-col gap-2">
				<div className="flex gap-2">
					<img 
						src={gameImage} 
						alt="Game thumb."
						className="h-14"
					/>
					<a 
						href="" 
						className="blue-link text-xs"
					>
						{gameName}
					</a>
					<div 
						className="flex flex-col text-xs ml-auto text-gray-500 
          justify-end right-0 text-end"
					>
						<p>{playTime}</p>
						<p>{lastPlayed}</p>
					</div>
				</div>
				<GameBadgeContainer
					gameBadge={gameBadge}
					badgeName={badgeName}
					xp={xp}
				/>
			</div>
		</BlackBgEffect>
	);
}

PlayedGame.propTypes = {
	gameImage: PropTypes.string.isRequired,
	gameName: PropTypes.string.isRequired,
	playTime: PropTypes.string.isRequired,
	lastPlayed: PropTypes.string.isRequired,
	gameBadge: PropTypes.string.isRequired,
	badgeName: PropTypes.string.isRequired,
	xp: PropTypes.number.isRequired,
};

export default PlayedGame;