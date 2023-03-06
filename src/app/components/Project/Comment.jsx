import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectIsLogged,
  selectUser,
} from "../../redux-store/authenticationSlice";
import UpdateComment from "./UpdateComment";
import pencil from "../../assets/img/icons/pencil.svg";
import report from "../../assets/img/icons/report.svg";
import axios from "axios";

function Comment({ comment, update }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  const isLogged = useSelector(selectIsLogged);
  const user = useSelector(selectUser);

  async function getAvatar(userId) {
    const user = await axios.get(
      `http://localhost:8000/tree-up-api/users/${userId}`
    );
    // console.log(user.data);
    setAvatar(user.data.avatar);
    setUsername(user.data.username);
  }

  getAvatar(comment.uuid_user);

  return (
    <div key={comment._id}>
      <div className="flex border-2 border-gradient-v rounded-lg py-2 px-4 mb-2">
        <div className="w-full">
          <div className="flex">
            <div className="flex items-center w-8 h-8 mr-2">
              <img className="w-full rounded-full" src={avatar} alt="avatar" />
            </div>
            <div className="flex items-center">
              <div className="font-semibold">{username}</div>
            </div>
          </div>
          {isUpdate ? (
            <UpdateComment
              comment={comment}
              setIsUpdate={setIsUpdate}
              update={update}
            />
          ) : (
            <div className="mt-2">{comment.comment}</div>
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
        </div>
      </div>
    </div>
  );
}

export default Comment;
