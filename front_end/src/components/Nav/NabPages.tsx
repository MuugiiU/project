import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { NavbarContext } from "../../context/NavContext";
import { useContext, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBarsFilter } from "@fortawesome/free-solid-svg-icons";

interface Inav {
  nav: Boolean;
  setNav: (nav: boolean) => void;
}
const catLink = [
  { cat: "Home", link: "/" },
  { cat: "Гэрийн&Тавилга", link: "/ger" },
  { cat: "Эрэгтэй", link: "/er" },
  { cat: "Эмэгтэй", link: "/em" },
  { cat: "Хүүхдийнх", link: "/huuhed" },
  { cat: "Спорт", link: "/sport" },
  { cat: "Цахилгаан хэрэгсэл", link: "/tsahilgaan" },
  { cat: "Технологи", link: "/technology" },
  { cat: "Гоо сайхан", link: "/goo" },
  { cat: "Үнэт эдлэл", link: "/unet" },
  { cat: "Ном", link: "/nom" },
];
const NabPages = () => {
  // dropdown-nii doosh ni unah state
  const { nav, setNav } = useContext(NavbarContext);

  const toggleMenu = () => {
    setNav(!nav);
    console.log(nav);
  };

  const history = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = (url: string) => {
    console.log("UU", url, menuOpen);
    if (url === "noUrl") {
      setMenuOpen(!menuOpen);
    } else {
      setMenuOpen(!menuOpen);
      history.push(url);
    }
  };
  return (
    <nav className=" w-full h-8 shadow-xl bg-white p-10">
      <div className="container mx-auto  items-center flex  h-full w-full   2xl:px16 justify-around ">
        <div>
          {/* side bar-nii 3 zuraas */}
          <button className="space-y-2" onClick={toggleMenu}>
            <div className="w-9 h-0.5 bg-[#55A3DF]" />
            <div className="w-9 h-0.5 bg-[#1FC4DC]" />
            <div className="w-9 h-0.5 bg-[#5ECDB1]" />
          </button>
          <span className="text-cyan-500 flex-row p-8"> Ангилал</span>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <li className="flex gap-4">
              {catLink.map(({ link, cat }) => (
                <Link
                  key={cat}
                  href={link}
                  className="ml=10  hover:bg-gray-50 hover:scale-110 text-cyan-500 "
                >
                  {cat}
                </Link>
              ))}
            </li>
          </ul>
        </div>
        <div
          onClick={() => {
            handleNav("noUrl");
          }}
          className="md:hidden cursor-pointer pl-24 text-cyan-400 "
        >
          {/* menu bar */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </div>
      </div>
      <div
        className={`w-full opacity-2 bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% top-0 left-0 absolute  transition-all duration-500 ${
          menuOpen ? "block translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* close icons */}
        <div className="flex w-full items-center text-white">
          <div
            onClick={() => {
              handleNav("noUrl");
            }}
            className=" md:hidden cursor-pointer pl-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor "
              className="w-10 h-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        {/* mobile responsive close bolgoh ued */}
        <div className="flex-col py-4 md:hidden">
          <ul>
            <li>
              {catLink.map(({ link, cat }) => (
                <Link
                  key={cat}
                  href={link}
                  className="py-4 cursor-pointer hover:bg-white text-white hover:text-cyan-500 flex"
                  onClick={() => setMenuOpen(menuOpen)}
                >
                  {cat}
                </Link>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NabPages;
