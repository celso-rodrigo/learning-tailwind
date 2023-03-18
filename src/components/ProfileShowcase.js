import React from "react";
import PropTypes from "prop-types";
import BlackBgEffect from "./BlackBgEffect";
import FavGame from "./FavGame";

function ProfileShowcase({title}) {
	return (
		<div>
			<h2
				className="font-light text-white p-1 w-full 
        bg-gradient-to-r from-teal-800 to-purple-900"
			>
				{title}
			</h2>
			<BlackBgEffect>
				<FavGame />
			</BlackBgEffect>
		</div>
	);
}

ProfileShowcase.propTypes = {
	title: PropTypes.string.isRequired,
};

export default ProfileShowcase;