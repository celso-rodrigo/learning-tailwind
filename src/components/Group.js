import React from "react";
import PropTypes from "prop-types";

function Group({image, title, members, main}) {
	return (
		<div className={`flex w-60 justify-end gap-4 py-1 ${main && "pb-4"}
		md:justify-start md:gap-2`}>
			<img 
				className={main ? "h-14" : "h-7"}
				src={image}
				alt={`Group ${title}`} 
			/>
			<div 
				className="flex flex-col justify-center text-xs w-2/3"
			>
				<a className="blue-link" href="">
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