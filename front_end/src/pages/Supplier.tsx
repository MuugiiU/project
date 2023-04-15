import React from "react";

const Supplier = () => {
  return (
    <div className="container mx-auto  w-full">
      <div style={{ height: "900px" }} className="flex pt-20">
        <div className="w-2/5 border border-2-black pt-20">
          <div className="flex justify-center">
            <img
              src="./images/SupplierProfile.png"
              alt="SupplierProfile"
              width={130}
            />
          </div>

          <p className="text-3xl flex justify-center pt-5">Name</p>
          <p className="text-xl flex justify-center pt-5">E-mail</p>
          <p className="text-xl flex justify-center pt-5">Phone</p>
          <p className="text-xl flex justify-center pt-5">Location</p>

          <div className="flex justify-center pt-20">
            <button className="p-3 w-40 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              Edit
            </button>
          </div>
        </div>
        <div className="w-3/5 border border-2-black flex justify-center items-center">
          <div
            style={{ width: "700px", height: "600px" }}
            className="border-2 border-2-black "
          >
            <div className="flex text-center w-full ">
              <div className="w-3/6 border border-black">Rents</div>
              <div className="w-3/6 border border-black">R.History</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
