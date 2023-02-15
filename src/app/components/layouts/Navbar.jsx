import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogged } from "./../../redux-store/authenticationSlice";
import {
  URL_HOME,
  URL_LOGIN,
  URL_REGISTER,
} from "../../constants/urls/urlFrontEnd";

const Navbar = () => {
	const [enableDropdown, setEnableDropdown] = useState(false);
	const isLoggued = true;

	const fakeData = {
		username: "Manucraft",
		image: Logo,
	};

  return (
    <div className="absolute mx-auto w-full bg-white px-4 shadow-sm sm:px-6">
      <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
        <div>
          <Link to={URL_HOME}>
            <img
              className="h-8 w-auto cursor-pointer sm:h-10"
              src="https://insy2s.com/insy2s/images/Logo-insy2s-INLINE-2021.svg"
              alt=""
              width={200}
              height={60}
            />
          </Link>
        </div>

						{isLoggued ? (
							<div className="flex items-center">
								<h5 className="mr-2">{fakeData.username}</h5>
								<div className="rounded-full shadow-sm hover:shadow-inner border-gradient-v shadow-dark gradient-v" onClick={() => setEnableDropdown(!enableDropdown)}>
									<img className="bg-white rounded-full m-1" src={fakeData.image} alt="Logo de TreeUp" width={60} />
								</div>
							</div>
						) : (
							<Link to="/login">
								<Button title={"Connexion"} />
							</Link>
						)}
					</div>
				</div>
			</div>

			{isLoggued && enableDropdown && (
				<div className="container mx-auto relative">
					<div className="float-right text-center px-3 pb-2 w-48 bg-gray-1 absolute right-0 rounded-b-md">
						<Link to="/profile">
							<div className="border-2 border-neutral-400 rounded m-1">Mon profil</div>
						</Link>
						<Link to="/">
							<div className="border-2 border-neutral-400 rounded m-1">Mes Projets </div>
						</Link>
						<hr className="border-neutral-400" />
						<Link to="/">
							<div className="border-2 border-neutral-400 rounded m-1 text-red-700 font-bold">Déconnexion</div>
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
