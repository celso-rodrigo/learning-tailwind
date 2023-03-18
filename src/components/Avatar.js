import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
	const {src, alt, size, borderStyle} = props;

	return (
		<div className={`relative w-${size} h-${size}`}>
			<div
				className={`w-${size} h-${size} ${borderStyle} absolute`}
			/>
			<img 
				className={`rounded-lg w-${size} h-${size}`} 
				src={src}
				alt={alt} 
			/>
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