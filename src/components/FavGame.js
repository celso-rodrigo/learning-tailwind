import React from "react";
import BlackBgEffect from "./BlackBgEffect";
import favGame from "../assets/fav_game_thumb.jpg";
import favGameBadge from "../assets/fav_game_badge.png";
import favGameAchiviement from "../assets/fav_game_achieviments.jpg";

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
			<div className="flex gap-8">
				<div
					className="flex p-2 gap-2 bg-stone-800 w-1/2 text-xs
						 text-white h-12"
				>
					<img
						src={favGameBadge} 
						alt="Favorite game badge."
						className="h-8"
					/>
					<div className="flex flex-col">
						<p>Duel Master</p>
						<p>500 XP</p>
					</div>
				</div>
				<div
					className="w-1/2 flex flex-col font-light gap-2"
				>
					<div className="flex justify-around text-xs">
						<a 
							href="" 
							className="text-white hover:text-blue-400"
						>
								Progresso em conquistas
						</a>
						<p className="text-gray-500">11 de 11</p>
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
		</div>
	);
}

export default FavGame;