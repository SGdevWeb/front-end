import { URL_BACK_COMMENT } from "../../constants/urls/urlBackEnd";
import apiGateway from "./apiGateway";
import { getToken } from "../../services/tokenServices";

const config = () => {
  const token = getToken();
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return { headers };
};

export function commentPost(values) {
  return apiGateway.post(URL_BACK_COMMENT, values, config());
}

export function getAllComments() {
  return apiGateway.get(URL_BACK_COMMENT);
}

export function updateComment(values) {
  return apiGateway.put(URL_BACK_COMMENT, values, config());
}

export function getCommentByProjectId(id) {
  return apiGateway.get(URL_BACK_COMMENT + `/${id}`);
}

export function deleteComment(id) {
  return apiGateway.delete(URL_BACK_COMMENT + `/${id}`, config());
}
