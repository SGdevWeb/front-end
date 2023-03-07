import { Navigate, useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getToken, isTokenValid } from "../services/tokenServices";
import { selectIsLogged, selectToken } from "../redux-store/authenticationSlice";

import { URL_LOGIN } from "../constants/urls/urlFrontEnd";
import { useSelector } from "react-redux";

export const ConnectedRoute = ({ children }) => {
	const [redirection, setRedirection] = useState();
	const location = useLocation();
    
    useEffect(() => {
		const token = getToken();
		if (!isTokenValid(token)) {
            setRedirection(<Navigate to={URL_LOGIN} state={{ from: location }} />)
        }
	}, []);


	if (redirection) return redirection;

	return children;
};
