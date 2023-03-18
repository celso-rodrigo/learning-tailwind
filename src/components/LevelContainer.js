import React from "react";
import PropTypes from "prop-types";

function LevelContainer({border, level}) {
	return (
		<p 
			className={`flex justify-center items-center w-7 h-7 
      text-white font-light text-sm border ${border}`}
		>
			{level}
		</p>
	);
}

LevelContainer.propTypes = {
	border: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired
};

export default LevelContainer;