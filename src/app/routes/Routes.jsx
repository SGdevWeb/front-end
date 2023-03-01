import * as URL from "../constants/urls/urlFrontEnd";

import { Route, Routes as RoutesContainer } from "react-router-dom";

import { ConnectedRoute } from "./ConnectedRoute";
import CreateProject from "../views/CreateProject/CreateProject";
import EditProfile from "../views/EditProfile/EditProfile";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import Profile from "../views/Profile/Profile";
import React from "react";
import SideBar from "../components/layouts/Sidebar";
import SignIn from "../views/SignIn/SignIn";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
	return (
		<RoutesContainer>
			<Route path={URL.URL_LOGIN} element={<Login />} />
			<Route path={URL.URL_SIGNIN} element={<SignIn />} />
			<Route
				path="/*"
				element={
					<div className=" flex container mx-auto pt-3 gap-3">
						<SideBar />
						<div className="w-full body overflow-y-scroll md:w-3/4 lg:w-4/5">
							<RoutesContainer>
								<Route path="/" element={<Home />} />
								<Route path={URL.URL_PROFILE} element={<ConnectedRoute><Profile /></ConnectedRoute>} />
								<Route path={URL.URL_EDITPROFILE} element={<ConnectedRoute><EditProfile /></ConnectedRoute>} />
								<Route path={URL.URL_CREATEPROJECT} element={<ConnectedRoute><CreateProject isEditMode={false}/></ConnectedRoute>} />
                <Route path={URL.URL_UPDATE} element={<ConnectedRoute><CreateProject isEditMode={true}/></ConnectedRoute>} />
							</RoutesContainer>
						</div>
					</div>
				}
			/>
		</RoutesContainer>
	);
};

export default Routes;
