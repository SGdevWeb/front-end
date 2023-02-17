import * as URL from "../constants/urls/urlFrontEnd";

import { Route, Routes as RoutesContainer } from "react-router-dom";

import EditProfile from "../views/EditProfile/EditProfile"
import HomePage from "../views/Home/Home";
import LoginPage from "../views/Login/Login";
import Profile from "../views/Profile/Profile";
import React from "react";
import SideBar from "../components/layouts/Sidebar";

/**
 * Routes of the application
 * with public and private route
 *
 * @author Peter Mollet
 */
const Routes = () => {
	return (
		<RoutesContainer>
			<Route path={URL.URL_LOGIN} element={<LoginPage />} />
			<Route path={URL.URL_REGISTER} element={<LoginPage />} />
			<Route
				path="/*"
				element={
					<div className="flex container mx-auto mt-3 gap-3">
						<SideBar />
						<div className="w-full md:w-3/4 lg:w-4/5">
							<RoutesContainer>
								<Route path="/" element={<HomePage />} />
								<Route path={URL.URL_PROFILE} element={<Profile />} />
								<Route path={URL.URL_EDITPROFILE} element ={<EditProfile />} />
							</RoutesContainer>
						</div>
					</div>
				}
			/>
		</RoutesContainer>
	);
};

export default Routes;
