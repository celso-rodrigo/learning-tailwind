import React from "react";
import PropTypes from "prop-types";

function LevelContainer({levelBorderColor, level}) {
	return (
		<p 
			className={`flex justify-center items-center w-7 h-7 
      text-white font-light text-sm border ${levelBorderColor}`}
		>
			{level}
		</p>
	);
}

LevelContainer.propTypes = {
	levelBorderColor: PropTypes.string.isRequired,
	level: PropTypes.string.isRequired
};

export default LevelContainer;