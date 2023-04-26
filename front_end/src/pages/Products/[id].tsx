import React from "react";

const Detail = () => {
  return (
    <div className="container mx-auto ">
      <ol className="flex items-center gap-2 md:py-2 sm:py-0 text-gray-500">
        <li className="flex gap-2 sm:hidden max-sm:hidden md:block">
          <a href="/">Нүүр</a> /
        </li>
        <li className="flex gap-2 sm:hidden max-sm:hidden md:block">
          <a href="/">Багаж хэрэгсэл</a> /
        </li>
        <li className="flex gap-2 sm:hidden max-sm:hidden md:block">
          <a href="/">Хийлэгч</a> /
        </li>
        <li className="flex gap-2 sm:hidden max-sm:hidden md:block">
          <a href="/">Ус буцалгагч</a> /
        </li>
      </ol>
      <div className="md:grid grid-cols-2 gap-2 sm:space-y-2 max-sm:space-y-0 md:space-y-0 p-5 bg-zinc-200 ">
        <div className=" border border-black">
          <img src="./images/BOSCH.jpeg" />
        </div>
        <div className="">
          <h1 className="font-bold text-2xl sm:pt-1 md:pt-0 max-sm:pt-1">
            Bosch TWK3P420 SS Ус буцалгагч 1.7л багтаамжтай
          </h1>
          <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
            Ус буцалгагч
          </p>
          <p className="md:font-light md:text-md md:block sm:hidden">
            (0 үнэлгээтэй)
          </p>
          <div className="w-full h-0.5 bg-zinc-300 my-2 scale-y-50"></div>
          <p className="font-medium text-sm sm:hidden md:block ">
            Онлайн авах үнэ
          </p>
          <h1 className="font-extrabold text-2xl">329,900 ₮</h1>
          <div className="w-full h-0.5 bg-zinc-300 my-2 scale-y-50 "></div>

          <div className="bg-green-300 h-20 rounded-lg flex gap-4 items-center px-5">
            <img
              style={{ width: "52px", height: "50px" }}
              src="./images/box.png"
            />
            <div>
              <h1>Хүргэлтийн нөхцөл</h1>
              <p>
                Бэлэн бараа{" "}
                <span className="text-red-500 font-semibold">48-72</span>{" "}
                цагтхүргэгдэнэ
              </p>
            </div>
          </div>
          <div className="md:grid grid-cols-2 gap-2 pt-2 md:space-y-0  sm:space-y-3 max-sm:space-y-3">
            <button className="border border-black p-5 w-full text-black font-bold rounded-md sm:text-sm">
              САГСАНД ХИЙХ
            </button>
            <button className="bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% border font-bold border-black text-white p-5 w-full rounded-md sm:text-sm sm:text-bold">
              ТҮРЭЭСЛЭН АВАХ
            </button>
          </div>
        </div>
      </div>

      <div
        className="grid md:grid-cols-4
      ъкзүшгн sm:grid-cols-2 gap-4 lg:grid-cols-6 md:space-y-0 sm:pt-6 max-sm:space-y-4 max-sm:pt-4 py-10"
      >
        <div className="h-80 border border-black p-8 ">
          <div className="sm:hidden md:block max-sm:hidden">
            <img src="./images/BOSCH.jpeg" />
          </div>
          <div>
            <h1 className="font-bold text-md">
              Bosch TWK3P420 SS Ус буцалгагч 1.7л...
            </h1>
            <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
              Ус буцалгагч
            </p>
            <h1 className="font-extrabold text-lg">329,900 ₮</h1>
          </div>
        </div>
        <div className="h-80 border border-black p-8">
          <div className="sm:hidden md:block max-sm:hidden">
            <img src="./images/BOSCH.jpeg" />
          </div>
          <div>
            <h1 className="font-bold text-md">
              Bosch TWK3P420 SS Ус буцалгагч 1.7л...
            </h1>
            <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
              Ус буцалгагч
            </p>
            <h1 className="font-extrabold text-lg">329,900 ₮</h1>
          </div>
        </div>
        <div className="h-80 border border-black p-8">
          <div className="sm:hidden md:block max-sm:hidden">
            <img src="./images/BOSCH.jpeg" />
          </div>
          <div>
            <h1 className="font-bold text-md">
              Bosch TWK3P420 SS Ус буцалгагч 1.7л...
            </h1>
            <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
              Ус буцалгагч
            </p>
            <h1 className="font-extrabold text-lg">329,900 ₮</h1>
          </div>
        </div>
        <div className="h-80 border border-black p-8">
          <div className="sm:hidden md:block max-sm:hidden">
            <img src="./images/BOSCH.jpeg" />
          </div>
          <div>
            <h1 className="font-bold text-md">
              Bosch TWK3P420 SS Ус буцалгагч 1.7л...
            </h1>
            <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
              Ус буцалгагч
            </p>
            <h1 className="font-extrabold text-lg">329,900 ₮</h1>
          </div>
        </div>
        <div className="h-80 border border-black p-8">
          <div className="sm:hidden md:block max-sm:hidden">
            <img src="./images/BOSCH.jpeg" />
          </div>
          <div>
            <h1 className="font-bold text-md">
              Bosch TWK3P420 SS Ус буцалгагч 1.7л...
            </h1>
            <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
              Ус буцалгагч
            </p>
            <h1 className="font-extrabold text-lg">329,900 ₮</h1>
          </div>
        </div>
        <div className="h-80 border border-black p-8">
          <div className="sm:hidden md:block max-sm:hidden">
            <img src="./images/BOSCH.jpeg" />
          </div>
          <div>
            <h1 className="font-bold text-md">
              Bosch TWK3P420 SS Ус буцалгагч 1.7л...
            </h1>
            <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
              Ус буцалгагч
            </p>
            <h1 className="font-extrabold text-lg">329,900 ₮</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
