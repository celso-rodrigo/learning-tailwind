import React from "react";
import AsideTitle from "./AsideTitle";

function ProfileLinks() {
	return (
		<div className="flex flex-col justify-evenly py-6 gap-3">
			<AsideTitle title="Jogos" amount="764" />
			<AsideTitle title="Inventário" amount=" " />
			<AsideTitle title="Capturas de tela " amount="22" />
			<AsideTitle title="Análises" amount="7" />
		</div>
	);
}

export default ProfileLinks;