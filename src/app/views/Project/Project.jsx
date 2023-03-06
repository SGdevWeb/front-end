import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CommentsContainer from "../../components/Project/CommentsContainer";
import { URL_HOME } from "../../constants/urls/urlFrontEnd";
import apiGateway from "../../api/backend/apiGateway";

function Project() {
  const nav = useNavigate();
	const { uuid } = useParams();

	const [project, setProject] = useState({
		uuid: "",
		name: "",
		date_start: "",
		date_end: "",
		description: "",
	});

	useEffect(() => {
		apiGateway
			.get("/project/" + uuid)
			.then(({ data }) => setProject(data))
			.catch(() => nav(URL_HOME));
	}, []);

	return (
		<div className="items-center gap-4 p-2">
			<div>
				<div>
					<h1 className="text-2xl">{project.name}</h1>
					<h3 className="text-xs">
						{project.date_start.slice(0, project.date_start.indexOf("T"))}
						{project.date_end ? " - " + project.date_end.slice(0, project.date_start.indexOf("T")) : ""}
					</h3>
				</div>
			</div>
			<div>
				<h2 className="text-2xl underline">Description du projet</h2>
				<p className="text-base">{project.description}</p>
			</div>
			<CommentsContainer />
		</div>
	);
}

export default Project;
