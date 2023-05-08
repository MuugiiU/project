import React, { useContext } from "react";
import Image from "next/image";
import erent from "../../../public/images/e.rent.png";
import { AuthContext } from "@/context/AuthContext";
import useReadingProgress from "@/hooks/useReadingProgress";
import Link from "next/link";
import profile from "../../../public/images/ekos.png";

const Dele = () => {
  const { supplier, setUser, logOut } = useContext(AuthContext);
  // const { user } = useContext(AuthContext);

  const completion = useReadingProgress();
  return (
    <div className="sticky top-0 z-[2000] gap-10">
      <nav className="flex items-center p-4 backdrop-blur-[60px] shadow-glassShadow shadow-lg gap-10">
        <div className="flex items-center text-gray-600 sm:hidden max-sm:hidden md:inline-block">
          <Image src={erent} className="w-20" />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 font-medium text-lg hover:text-gray-400 mr-4"
            >
              Нүүр
            </Link>

            <Link
              href="/services"
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 font-medium text-lg hover:text-gray-400"
            >
              Үйлчилгээ
            </Link>
          </div>
          <span
            style={{
              transform: `translateX(${completion - 100}%)`,
              background:
                "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
            }}
            className="absolute h-1 w-full bottom-0"
          ></span>
          <div className="p-2 rounded-lg text-white  ">
            {supplier ? (
              <Image
                onClick={logOut}
                className="w-12 h-12 rounded-full border-2 border-green-400 "
                src={profile}
              />
            ) : (
              <div
                style={{
                  background:
                    "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                }}
                className="p-2 font-medium text-white rounded-lg border-2 border-yellow-200"
              >
                <Link href="/login">Нэвтрэх</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dele;
