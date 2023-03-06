import { URL_BACK_COMMENTPOST } from "../../constants/urls/urlBackEnd";
import apiGateway from "./apiGateway";
import { getToken } from "../../services/tokenServices";

export function commentPost(values) {
  const token = getToken();
  return apiGateway.post(URL_BACK_COMMENTPOST, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getAllComments() {
  return apiGateway.get("/comments");
}

export function updateComment(values) {
  const token = getToken();
  return apiGateway.put("/comments", values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getCommentByProjectId(id) {
  return apiGateway.get(`/comments/${id}`);
}
