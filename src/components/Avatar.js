import React from "react";
import PropTypes from "prop-types";

function Avatar(props) {
	const {mainAvatar, borderStyle, src, alt} = props;
	const imageSize = mainAvatar ? "w-36 h-36" : "w-8 h-8";
	const borderEnum = {
		0: "border-2 border-gray-500",
		1: "border-2 border-blue-400",
		2: "h-36 aspect-square border-4 border-pink-500 absolute" +
     " ring ring-pink-500 rounded-lg animate-pulse blur-sm",
	};

	return (
		<div className={`relative ${imageSize}`}>
			<div
				className={`absolute ${imageSize} ${borderEnum[borderStyle]}`}
			/>
			<img 
				className={`rounded-lg ${imageSize}`} 
				src={src}
				alt={alt} 
			/>
		</div>
	);
}

Avatar.propTypes = {
	mainAvatar: PropTypes.bool.isRequired,
	borderStyle: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

export default Avatar;