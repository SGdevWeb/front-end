import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectIsLogged,
  selectUser,
} from "../../redux-store/authenticationSlice";
import UpdateComment from "./UpdateComment";
import pencil from "../../assets/img/icons/pencil.svg";
import report from "../../assets/img/icons/report.svg";
import trash from "../../assets/img/icons/trash.svg";
import { getUser } from "../../api/backend/account";

function Comment({ comment, update, delComment }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  const isLogged = useSelector(selectIsLogged);
  const user = useSelector(selectUser);

  async function getAvatarAndUsername(userId) {
    const response = await getUser(userId);
    const { avatar, username } = response.data.user;
    setAvatar(avatar);
    setUsername(username);
  }

  getAvatarAndUsername(comment.uuid_user);

  return (
    <div key={comment._id}>
      <div className="flex border-2 border-gradient-v rounded-lg py-2 px-4 mb-2">
        <div className="w-full">
          <div className="flex">
            <div className="flex items-center w-8 h-8 mr-2">
              <img className="w-full rounded-full" src={avatar} alt="avatar" />
            </div>
            <div className="flex items-center">
              <div className="font-semibold text-dark">{username}</div>
            </div>
          </div>
          {isUpdate ? (
            <UpdateComment
              comment={comment}
              setIsUpdate={setIsUpdate}
              update={update}
            />
          ) : (
            <div className="mt-2 text-dark">{comment.comment}</div>
          )}
        </div>
        <div className="flex flex-row">
          {!isUpdate &&
            isLogged &&
            user != null &&
            comment.uuid_user === user.userId && (
              <div className="flex items-end">
                <button type="submit" onClick={() => setIsUpdate(!isUpdate)}>
                  <img src={pencil} alt="" />
                </button>
              </div>
            )}
          {!isUpdate && (
            <div className="flex items-end ml-1">
              <img src={report} alt="" />
            </div>
          )}
          {!isUpdate &&
            isLogged &&
            user != null &&
            comment.uuid_user === user.userId && (
              <div className="flex items-end ml-1 w-5">
                <button type="submit" onClick={() => delComment(comment.uuid)}>
                  <img src={trash} alt="" />
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Comment;
