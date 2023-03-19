import React from "react";
import PropTypes from "prop-types";

function Group({image, title, members, main}) {
	return (
		<div className={`flex gap-2 py-1 ${main && "pb-4"}`}>
			<img 
				className={main ? "h-14" : "h-7"}
				src={image}
				alt={`Group ${title}`} 
			/>
			<div 
				className="flex flex-col justify-center text-xs"
			>
				<a className="text-white hover:text-blue-400" href="">
					{title}
				</a>
				<p className="text-gray-400">{`${members} membros`}</p>
			</div>
		</div>
	);
}

Group.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	members: PropTypes.string.isRequired,
	main: PropTypes.bool.isRequired
};

export default Group;