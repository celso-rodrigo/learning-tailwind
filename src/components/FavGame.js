import React from "react";
import BlackBgEffect from "./BlackBgEffect";
import favGame from "../assets/fav_game_thumb.jpg";
import favGameBadge from "../assets/fav_game_badge.png";
import favGameAchiviement from "../assets/fav_game_achieviments.jpg";
import GameStatus from "./GameStatus";

function FavGame() {
	return (
		<div className="flex flex-col gap-3">
			<BlackBgEffect>
				<div className="flex flex-col gap-5">
					<div className="flex gap-3">
						<img
							src={favGame} 
							alt="Favore game."
							className="h-14"
						/>
						<h2
							className="text-white font-light text-lg"
						>
							Yu-Gi-Oh! Master Duel
						</h2>
					</div>
					<div className="flex gap-8">
						<div className="flex flex-col">
							<p className="text-white font-light text-3xl">
								1,247
							</p>
							<p className="text-gray-500  font-light text-sm">
								Horas de jogo
							</p>
						</div>
						<div className="flex flex-col">
							<p className="text-white font-light text-3xl">
								11
							</p>
							<p className="text-gray-500 font-light text-sm">
								Conquistas
							</p>
						</div>
					</div>
				</div>
			</BlackBgEffect>
			<GameStatus
				favGameBadge={favGameBadge}
				favGameAchiviement={favGameAchiviement}
				badgeName="Duel Master"
				xp={500}
				achievementAmount={500}
			/>
			
		</div>
	);
}

export default FavGame;