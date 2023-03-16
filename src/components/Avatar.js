import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
	const {src, alt, size, borderStyle} = props;

	return (
		<div className={`relative ${size}`}>
			<div
				className={borderStyle}
			/>
			<img className={`rounded-lg ${size}`} src={src} alt={alt} />
		</div>
	);
}

Avatar.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	size: PropTypes.string.isRequired,
	borderStyle: PropTypes.string.isRequired,
};

export default Avatar;