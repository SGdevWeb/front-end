import React, { useEffect, useState } from 'react';
import { selectIsLogged, signIn } from './redux-store/authenticationSlice';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Routes from './routes/Routes';
import SideBar from './components/layouts/SideBar';
import { getToken } from './services/tokenServices';
/**
 * Component RouteWithNavigation
 * To create the structure of the application (nav bar, routes, toast, etc...)
 *
 * @author Peter Mollet
 */

const App = () => {
    // const isLogged = useSelector(selectIsLogged);
    // const dispatch = useDispatch();
    // const [isLogin, setIsLogin] = useState(true);

    // useEffect(() => {
    //     const token = getToken();
    //     if (token) dispatch(signIn(token));
    //     setIsLogin(false);
    // }, []);

    // if (isLogin) return null;

    return (
        <BrowserRouter>
            <div className="flex h-full cursor-default relative flex-col bg-gray-100">
                <Navbar />  
                <main className="main container flex mx-auto justify-center mt-8">
						<SideBar />
					<div className="md:w-4/6 xl:w-5/6">
						<Routes />
					</div>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default App;
