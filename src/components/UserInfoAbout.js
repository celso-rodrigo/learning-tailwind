import React from "react";

function UserInfoAbout() {
	return (
		<div className="p-2 px-4">
			<h1 className="text-xl text-white font-light">Pink</h1>
			<p 
				className="text-xs text-white font-light pb-4"
			>
          Celso
				<span className="pl-3">
            Campina Grande, Paraiba, Brazil
				</span>
			</p>
			<a 
				href="" 
				className="text-xs text-white font-light pb-4 hover:underline"
			>
        Why you have to be so amazing?
			</a>
		</div>
	);
}

export default UserInfoAbout;