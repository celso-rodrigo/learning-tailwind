import React from "react";
import PropTypes from "prop-types";

function BlackBgEffect({children}) {
	return (
		<div className="bg-black/30 p-2">
			{children}
		</div>
	);
}

BlackBgEffect.propTypes = {
	children: PropTypes.node.isRequired
};

export default BlackBgEffect;