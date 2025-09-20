import img1 from "../../assets/Icon.svg";
import img2 from "../../assets/Cart.png";
import { NavLink } from "react-router-dom";
import { Home } from "../../pages/Home/Home.jsx";

export const Header = () => {
  return (
    <nav className={`bg-white px-3 lg:px-12`}>
      <div className="flex justify-between items-center">
        {/* Logo + text */}
        <div className="flex items-center">
          <img src={img1} alt="Icon" className="h-12 w-12" />
          <p className="text-center ml-3 text-[24px] font-bold text-[#22262A]">
            E-Comm
          </p>
        </div>

        {/* Pages */}
        <div className="hidden lg:flex p-4 gap-18 text-gray-700 text-lg">
          <NavLink
            to={Home}
            className={({ isActive }) =>
              `transition-all ${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/Bag"
            className={({ isActive }) =>
              `transition-all ${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            BAG
          </NavLink>

          <NavLink
            to="/Home"
            className={({ isActive }) =>
              `transition-all ${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            SNEAKERS
          </NavLink>

          <NavLink
            to="/Home"
            className={({ isActive }) =>
              `transition-all ${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            BELT
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-all ${
                isActive ? "text-blue-500 font-semibold" : "hover:text-blue-500"
              }`
            }
          >
            CONTACT
          </NavLink>
        </div>


        {/* Right Section */}
        <div className="flex flex-row justify-center items-center p-2">
          <img src={img2} alt="cart logo" className="h-8 w-8" />
          <p className="text-[20px]">
            Items <span className="ml-2 text-gray-400 text-[20px]">$0.00</span>
          </p>
        </div>
      </div>
    </nav>
  );
};
