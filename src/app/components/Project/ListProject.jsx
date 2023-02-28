import CardProject from "./CardProject";
import { Link } from "react-router-dom";
import React from "react";
import { URL_CREATEPROJECT } from "../../constants/urls/urlFrontEnd";
import projectData from "../../fakeData/ProjectData.js"

const ListProject = () => {

	return (
		<div className="flex flex-wrap justify-center h-full gap-10">
			<div className="border-gradient-v rounded-3xl p-3">
				<p>Tree-Up vous permets de partager et d’échanger sur les divers projets d’actualité postés par nos jeunes développeurs !</p>
				<p>N’hésitez pas à faire un tour sur nos projets récents et de partager votre avis dans la section commentaires !</p>
				<Link to={URL_CREATEPROJECT} className="text-primary-light">
					Cliquez ici
				</Link>
				<p className="inline-block ml-1">si vous souhaitez créer un projet afin de le mettre en avant !</p>
			</div>
			{projectData.map((project) => (
				<CardProject key={project.uuid} {...project} />
			))}
		</div>
	);
};

export default ListProject;
