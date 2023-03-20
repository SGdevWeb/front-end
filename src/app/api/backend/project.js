import { URL_BACK_GET_PROJECT_LOGGED } from "../../constants/urls/urlBackEnd";
import apiGateway from "./apiGateway";
import { getToken } from "../../services/tokenServices";

const config = () => {
    const token = getToken();
    const headers = {
        Authorization: `Bearer ${token}`,
    };
    return { headers };
};

export function postLike(values) {
    return apiGateway.post(URL_BACK_GET_PROJECT_LOGGED, values, config());
}
