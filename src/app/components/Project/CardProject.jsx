import { Link } from "react-router-dom";
import PillTechnologie from "../Technos/PillTechnologie";
import React from "react";
import { URL_PROJETVIEW } from "../../constants/urls/urlFrontEnd";

const CardProject = ({ uuid, name, type, description, collaborator, technologies, image }) => {
	return (
		<Link to={URL_PROJETVIEW + uuid} className="border-gradient-h border-0 rounded-2xl hover:shadow-2xl active:border-2">
			<article className="flex flex-col items-center pb-2 w-96 rounded-2xl bg-white">
				{/* <img className="rounded-t-2xl h-40 w-full aspect-video" src={image} alt="Projet" loading="lazy" /> */}

				<div className="flex flex-col w-full  justify-between align-super p-3">
					<div>
						<h4 className="text-2xl">{name}</h4>
						{/* <h6 className="text-sm text-gray-400">Type de project : {type}</h6> */}
					</div>
					<div>
						<h5 className="text-sm font-bold">Description</h5>
						<p className="break-words">{description.slice(0, 150)}...</p>
					</div>{/*
					<hr className="border-dark" />
					 <div>
						<h5 className="text-sm font-bold">Collarateurs</h5>
						<p>{collaborator}</p>
					</div> 
					<div className="flex gap-1 overflow-x-auto">
						 {technologies.map((technologie) => (
							<PillTechnologie key={technologie.uuid} {...technologie} />
						))} 
					</div>*/}
				</div>
			</article>
		</Link>
	);
};

export default CardProject;
