import { Navigate, useLocation } from 'react-router-dom';

import React from 'react';
import { URL_LOGIN } from '../constants/urls/urlFrontEnd';
import { selectIsLogged } from '../redux-store/authenticationSlice';
import { useSelector } from 'react-redux';

export const ConnectedRoute = ({ children }) => {
    const location = useLocation();
    const isAuthenticated = useSelector(selectIsLogged);
    if (!isAuthenticated)
        return <Navigate replace to={URL_LOGIN} state={{ from: location }} />;
    return children;
};
