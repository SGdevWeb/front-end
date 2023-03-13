import React, {useState} from "react";
import { HeartIcon as HeartIconfull } from "@heroicons/react/solid";
import { HeartIcon as HeartIconEmpty } from "@heroicons/react/outline";
import apiGateway from '../../api/backend/apiGateway';
import { URL_BACK_POSTLIKE } from '../../constants/urls/urlBackEnd';

function LikeButton({ isLogged, countLike, isliked, uuid_project}) {
    const [liked, setliked] = useState(isliked)
    const [likes,setlikes] = useState(countLike)
	return (
        <div className={`border-gradient-v border-2 rounded-lg text-primary px-1 py-1 flex flex-wrap justify-center items-center max-w-fit`}>
            
            {isLogged ? (
                <button 
                    type="button" 
                    className={`mr-1`} 
                    onClick={async () => {
                        await apiGateway.post(URL_BACK_POSTLIKE,{uuid_project : uuid_project}).then((res) => {
                            setliked(res.data.isliked);
                            {res.data.isliked ? setlikes(likes+1) : setlikes(likes-1)}
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
            {`${likes}`}
        </div>
		
	);
}

export default LikeButton;