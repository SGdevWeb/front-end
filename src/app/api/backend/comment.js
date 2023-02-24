import { URL_BACK_COMMENTPOST } from '../../constants/urls/urlBackEnd';
import apiGateway from './apiGateway';

export function commentPost(values) {
    return apiGateway.post(URL_BACK_COMMENTPOST, values);
}