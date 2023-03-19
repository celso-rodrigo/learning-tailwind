import React from "react";
import BlackBgEffect from "./BlackBgEffect";
import PlayedGame from "./PlayedGame";
import favGameThumb from "../assets/fav_game_thumb.jpg";
import favGameBadge from "../assets/fav_game_badge.png";
import lastGame2 from "../assets/last_game_tumb2.jpg";
import lastGame2Badge from "../assets/last_game_badge2.png";
import lastGame3 from "../assets/last_game_tumb3.jpg";
import lastGame3Badge from "../assets/last_game_badge3.png";


function PlayedHistory() {
	return (
		<div className="flex flex-col gap-4">
			<BlackBgEffect>
				<div className="flex justify-between">
					<h3
						className="text-gray-500 font-light"
					>
          Atividade recente
					</h3>
					<h3
						className="text-gray-500 font-light"
					>
          85.6 hora(s) nas 2 últimas semanas
					</h3>
				</div>
			</BlackBgEffect>
			<PlayedGame
				gameImage={favGameThumb}
				gameName="Yu-Gi-Oh! Master Duel"
				playTime="1,250 horas registradas"
				lastPlayed="jogado pela última vez em 19 de mar."
				gameBadge={favGameBadge}
				badgeName="Duel Master"
				xp={500}
			/>
			<PlayedGame
				gameImage={lastGame2}
				gameName="Don't Starve Together"
				playTime="274 horas registradas"
				lastPlayed="jogado pela última vez em 18 de mar."
				gameBadge={lastGame2Badge}
				badgeName="Science Machine"
				xp={100}
			/>
			<PlayedGame
				gameImage={lastGame3}
				gameName="Team Fortress 2"
				playTime="1,920 horas registradas"
				lastPlayed="jogado pela última vez em 12 de mar."
				gameBadge={lastGame3Badge}
				badgeName="Mannifest Destiny"
				xp={500}
			/>
		</div>
	);
}

export default PlayedHistory;