import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { NavbarContext } from "@/context/NavContext";
import { useContext, useState, useEffect } from "react";

interface Inav {
  nav: Boolean;
  setNav: (nav: boolean) => void;
}
const Sidenav = () => {
  const router = useRouter();
  const { nav, setNav } = useContext(NavbarContext);
  const [hidden, setHidden] = useState<string>("");
  useEffect(() => {
    nav ? setHidden("") : setHidden("hidden");
  }, [nav]);
  const navLink = [
    { name: "Home", link: "/" },
    { name: "Гэрийн&Тавилга", link: "/ger" },
    { name: "Эрэгтэй", link: "/er" },
    { name: "Эмэгтэй", link: "/em" },
    { name: "Хүүхдийнх", link: "/huuhed" },
    { name: "Спорт", link: "/sport" },
    { name: "Цахилгаан хэрэгсэл", link: "/tsahilgaan" },
    { name: "Технологи", link: "/technology" },
    { name: "Гоо сайхан", link: "/goo" },
    { name: "Үнэт эдлэл", link: "/unet" },
    { name: "Ном", link: "/nom" },
  ];
  return (
    <div className={"h-screen bg-white shadow-md px-5 w-[250px] " + hidden}>
      <h1 className="text-lg text-center py-5 font-semibold text-cyan-500">
        Категори
      </h1>
      <div className="space-y-5 flex flex-col">
        {navLink.map(({ link, name }) => (
          <Link
            key={name}
            href={link}
            className={`${
              router.pathname === link
                ? "bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% text-white"
                : " "
            } p-3 bg-gray-50 hover:cursor-pointer capitalize rounded-md`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sidenav;
