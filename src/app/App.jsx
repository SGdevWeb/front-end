import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import React from "react";
import Routes from "./routes/Routes";

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
      <Navbar />
      <div className="bg-gray-50 main">
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
