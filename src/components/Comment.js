import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";

function Comment({image, borderStyle, name, comment}) {
	return (
		<div className="flex items-center hover:bg-gray-500/50 h-12 p-1">
			<Avatar 
				mainAvatar={false}
				borderStyle={borderStyle}
				src={image}
				alt="User comment avatar."
			/>
			<div className="flex flex-col pl-2 text-white text-xs">
				<p className="font-light">{name}</p>
				<p className="font-extralight">{comment}</p>
			</div>
		</div>
	);
}

Comment.propTypes = {
	image: PropTypes.string.isRequired,
	borderStyle: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	comment: PropTypes.string.isRequired
};

export default Comment;