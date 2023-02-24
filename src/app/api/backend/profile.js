import { URL_BACK_GET_PROFILE } from "../../constants/urls/urlBackEnd";

export function getProfile(uuid) {
    return apiGateway.get(URL_BACK_GET_PROFILE, uuid);
  }