import React from "react";
import { Link } from "react-router-dom";

import ProjectList from "../../components/theme/ProjectList";

const HomePage = () => {
	return (
		<div className="h-full">
			<div className="border-gradient-v rounded">
				<p>Tree-Up vous permets de partager et d’échanger sur les divers projets d’actualité postés par nos jeunes développeurs ! </p>
				<p>N’hésitez pas à faire un tour sur nos projets récents et de partager votre avis dans la section commentaires ! </p>
				<Link to="" className="text-primary-light">
					Cliquez ici
				</Link>
				<p className="inline-block ml-1">si vous souhaitez créer un projet afin de le mettre en avant ! </p>
			</div>

			<ProjectList />
		</div>
	);
};

export default HomePage;
