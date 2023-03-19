import React from "react";
import BlackBgEffect from "./BlackBgEffect";
import Comment from "./Comment";
import friend1 from "../assets/friend1.jpg";
import friend2 from "../assets/friend2.jpg";

function CommentsContainer() {
	return (
		<div>
			<BlackBgEffect>
				<h3
					className="text-gray-500 font-light"
				>
          Comentários
				</h3>
			</BlackBgEffect>
			<div className="flex flex-col pt-4">
				<Comment 
					image={friend1} 
					borderStyle={1}
					name="Neidrocas"
					comment="Lindoso <3"
				/>
				<Comment 
					image={friend2} 
					borderStyle={0}
					name="Neidrocas"
					comment="Brabo"
				/>
			</div>
		</div>
	);
}

export default CommentsContainer;