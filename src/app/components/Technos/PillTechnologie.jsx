import React from "react";

const PillTechnologie = ({ name, image }) => {
	return (
		<div className="flex min-w-fit justify-center items-center px-2 py-1 gap-1 rounded-3xl border-gradient-v">
			<img src={image} alt={name} width={24} />
			<span>{name}</span>
		</div>
	);
};

export default PillTechnologie;
