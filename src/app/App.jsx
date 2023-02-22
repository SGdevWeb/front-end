import React, { useEffect, useState } from "react";

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Routes from './routes/Routes';

/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="bg-gray-50 main">
				<Routes />
			</div>
		</BrowserRouter>
	);
};

export default App;
