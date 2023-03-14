import React, {useState,useEffect} from "react";
import { HeartIcon as HeartIconfull } from "@heroicons/react/solid";
import { HeartIcon as HeartIconEmpty } from "@heroicons/react/outline";
import {postLike} from '../../api/backend/like'

function LikeButton({ isLogged, isliked, project, setProject}) { 
    const [liked, setliked] = useState(isliked);
	return (
        <div className={`border-gradient-v border-2 rounded-lg text-primary px-1 flex flex-wrap justify-center items-center max-w-fit`}>
            
            {isLogged ? (
                <button 
                    type="button" 
                    className={`mr-1`} 
                    onClick={async () => {
                        await postLike({uuid_project : project.uuid}).then((res) => {
                            setliked(res.data.isliked);
                            const newProject = project
                            {res.data.isliked ? newProject.countLikes+=1 : newProject.countLikes-=1}
                            console.log(newProject)
                            setProject(project => ({...project,...newProject}));
                        }).catch((err) => {
                            console.log(err)
                        })
                        //setlikes(likes+1)
                    }}
                > 
                {liked ? (
                <HeartIconfull className='h-5 w-5 my-1'/>
                ) : (
                <HeartIconEmpty className='h-5 w-5 my-1'/>
                )}
			    
		        </button>
            ) : null}
            {`${project.countLikes}`}
        </div>
		
	);
}

export default LikeButton;