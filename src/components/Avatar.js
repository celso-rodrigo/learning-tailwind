import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
	const {src, alt, avatarStyle} = props;

	return (
		<img className={avatarStyle} src={src} alt={alt} />
	);
}

Avatar.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	avatarStyle: PropTypes.string.isRequired,
};

export default Avatar;