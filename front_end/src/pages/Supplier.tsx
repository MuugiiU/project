import React from "react";

const Supplier = () => {
  return (
    <div className="container mx-auto border border-black">
      <div className="grid md:grid-cols-3 p-12 gap-4">
        <div className="border border-black md:col-span-1 rounded-xl h-96">
          <div className="text-center">
            <img src="./images/user.png" width={100} />
            <h1>Myagmardorj Bilguunerkh</h1>
            <p>Bilguunerkh@gmail.com</p>
          </div>
        </div>
        <div className="border border-black md:col-span-2 rounded-xl h-96"></div>
      </div>
    </div>
  );
};

export default Supplier;
