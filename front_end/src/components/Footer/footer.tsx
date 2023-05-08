import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
      }}
    >
      <div className="container mx-auto text-white">
        <div className="grid md:grid-cols-4 sm:text-center md:text-start gap-10 p-10 max-sm:grid-cols-2 sm:grid-cols-2">
          <div>
            <h4 className="font-semibold text-md">Компани</h4>
            <ul className="font-light text-sm pt-5">
              <li>
                <a href="/">Бидний тухай</a>
              </li>
              <li>
                <a href="/">Чанарын бодлого</a>
              </li>
              <li>
                <a href="/">Нээлттэй ажлын байр</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md">Тусламж</h4>
            <ul className="font-light text-sm pt-5 ">
              <li>
                <a href="/">Дэлгүүрийн байршил</a>
              </li>
              <li>
                <a href="/">Бараа захиалах заавар</a>
              </li>
              <li>
                <a href="/">Шинээр гишүүн болох</a>
              </li>
              <li>
                <a href="/">Хэтэвч</a>
              </li>
              <li>
                <a href="/">Асуулт хариулт</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md">Үйлчилгээ</h4>
            <ul className="font-light text-sm pt-5">
              <li>
                <a href="/">Үйлчилгээний нөхцөл</a>
              </li>
              <li>
                <a href="/">Төлбөрийн нөхцөл</a>
              </li>
              <li>
                <a href="/">Хүргэлт</a>
              </li>
              <li>
                <a href="/">Онлайн гэрээний үйлчилгээ</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md">Холбоо барих</h4>
            <ul className="font-light text-sm pt-5">
              <li>
                <p>+97685151195</p>
                <p>+97699433461</p>
                <p>+97685151195</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{ backgroundColor: "white" }}
          className="w-full h-0.5 my-10 scale-y-50 "
        ></div>
      </div>
      <div
        style={{ backgroundColor: "#20262E" }}
        className="text-white flex justify-center items-center h-10"
      >
        <h4 className="opacity-90">
          © 2023 Erent LLC |<span className="text-green-400"> version 1.0</span>
        </h4>
      </div>
    </div>
  );
};

export default Footer;
