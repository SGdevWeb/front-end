import * as URL from "../constants/urls/urlFrontEnd";

import { Route, Routes as RoutesContainer } from "react-router-dom";

import AdminHomeView from "../views/AdminHomeView";
import EditProfile from "../views/EditProfile/EditProfile";
import HomeView from "../views/HomeView";
import LoginPage from "../views/LoginView/LoginPage";
import LoginView from "../views/LoginView";
import { PrivateRoute } from "./PrivateRoute";
import Profile from "../views/Profile/Profile";
import { ROLE_ADMIN } from "../constants/rolesConstant";
import React from "react";

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
      <Route
        path={URL.URL_ADMIN_HOME}
        element={
          <PrivateRoute roles={[ROLE_ADMIN]}>
            <AdminHomeView />
          </PrivateRoute>
        }
      />
      {/* <Route path={URL.URL_LOGIN} element={<LoginView />} /> */}
      <Route path={URL.URL_LOGIN} element={<LoginPage />} />
      <Route path={URL.URL_REGISTER} element={<SignInPage />} />
      <Route path={URL.URL_PROFILE} element ={<Profile />} />
      <Route path={URL.URL_EDITPROFILE} element ={<EditProfile />} />
    </RoutesContainer>
  );
};

export default Routes;
