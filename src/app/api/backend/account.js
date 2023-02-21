import { URL_BACK_AUTHENTICATE, URL_BACK_REGISTER } from '../../constants/urls/urlBackEnd';
// import apiBackEnd from './api.Backend';
import apiGateway from './apiGateway';
import axios from 'axios';

export function authenticate(values) {
    return apiGateway.post(URL_BACK_AUTHENTICATE, values);
    // return axios.post("http://localhost:8000/tree-up-api/login", values)
}

export function registerUser(values) {
    return apiGateway.post(URL_BACK_REGISTER, values);
}