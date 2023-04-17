import { NavbarContext } from "@/context/NavContext";
import { useContext } from "react";
interface Inav {
  nav: Boolean;
  setNav: (nav: boolean) => void;
}

const Navbar = () => {
  const { nav, setNav } = useContext(NavbarContext);
  const toggleMenu = () => {
    setNav(!nav);
    console.log(nav);
  };
  return (
    <div className="pt-3">
      <div className="bg-white h-20 shadow-md ">
        <div className="container mx-auto  items-center gap-10 flex justify-between ">
          <picture className="flex gap-10 items-center">
            <img
              src="./images/e.rent.png"
              height={80}
              width={80}
              alt="imagew"
            />

            {/* side bar-nii 3 zuraas */}
            <button className="space-y-2" onClick={toggleMenu}>
              <div className="w-8 h-0.5 bg-[#55A3DF]" />
              <div className="w-8 h-0.5 bg-[#1FC4DC]" />
              <div className="w-8 h-0.5 bg-[#5ECDB1]" />
            </button>
          </picture>
          {/* Search heseg ehlej bg ni  */}
          <form className="w-full pl-10">
            <div className="flex w-full">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 flex items-center py-2.5 px-4 text-sm font-medium text-center text-cyan-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
                type="button"
              >
                Бүгд{" "}
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% placeholder-white rounded-r-md"
                  placeholder="Хайлт жишээ нь: search, хайх зүйлээ бичнэ үү..."
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-r-lg  hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 bg-transparent"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Хайх</span>
                </button>
              </div>
            </div>
          </form>
          {/* notification, cart, avatar icons */}
          <div className="flex gap-10 w-3/12">
            <picture className="flex gap-10">
              <img
                src="./images/notification-bell.png"
                height={35}
                width={35}
              />
              <img src="./images/navbar_cart.png" height={35} width={35} />
              <img src="./images/navbar_avatar.png" height={35} width={35} />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
