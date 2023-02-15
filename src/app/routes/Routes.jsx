import * as URL from "../constants/urls/urlFrontEnd";

import { Route, Routes as RoutesContainer } from "react-router-dom";

import EditProfile from "../views/EditProfile/EditProfile";
import HomePage from '../views/Home/Home'
import Login from "../views/Login/Login";
import Profile from "../views/Profile/Profile";
import React from "react";
import SignIn from "../views/SignIn/SignIn"

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
  return (
    <RoutesContainer>
      <Route path={URL.URL_HOME} element={<HomePage />} />
      {/* <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      /> */}
      <Route path={URL.URL_LOGIN} element={<Login />} />
      <Route path={URL.URL_SIGNIN} element={<SignIn />} />
      <Route path={URL.URL_PROFILE} element ={<Profile />} />
      <Route path={URL.URL_EDITPROFILE} element ={<EditProfile />} />
    </RoutesContainer>
  );
};

export default Routes;
