import React from "react";
import PropTypes from "prop-types";

function AsideTitle({title, amount}) {
	return (
		<a className="flex justify-center items-baseline md:justify-start">
			<h3 
				className="underline-link"
			>
				{title}
			</h3> 
			<span className="text-lg font-light text-gray-400 pl-2">
				{amount}
			</span>
		</a>
	);
}

AsideTitle.propTypes = {
	title: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired
};

export default AsideTitle;