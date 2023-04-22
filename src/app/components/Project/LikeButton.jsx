import React, {useEffect, useState} from "react";

import { ThumbUpIcon as HeartIconEmpty } from "@heroicons/react/outline";
import { ThumbUpIcon as HeartIconfull } from "@heroicons/react/solid";
import {postLike} from '../../api/backend/like'

function LikeButton({ isLogged, project, setProject}) {
	return (
        <div className={`bg-gray-200 text-center text-sm hover:font-medium flex items-center gap-2 py-1 px-3 rounded-l-md cursor-pointer ${project.liked ? "bg-zinc-800 text-white" : ""}`}>
            
            {isLogged ? (
                <button 
                    type="button" 
                    className={`mr-1`} 
                    onClick={async () => {
                        await postLike({uuid_project : project.uuid}).then((res) => {
                            
                            const newProject = project
                            {project.liked ? newProject.liked = false : newProject.liked = true}
                            {res.data.isliked ? newProject.countLikes+=1 : newProject.countLikes-=1}
                            setProject(project => ({...project,...newProject}));
                        }).catch((err) => {
                            console.log(err)
                        })
                        //setlikes(likes+1)
                    }}
                > 
                {project.liked ? (
                <HeartIconfull className='h-7 w-7 my-1'/>
                ) : (
                <HeartIconEmpty className='h-7 w-7 my-1'/>
                )}
			    
		        </button>
            ) : <HeartIconEmpty className='h-7 w-7 my-1 mr-1'/>
            }
            {project.liked ? "Vous avez like ce projet" : "Ajouter un like"}
        </div>
		
	);
}

export default LikeButton;