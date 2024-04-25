import React from "react";

function MostPopular() {
  return (
    <div className="max-w-[1400px] mx-auto mt-5 mb-5">
      <div class="">
        <div class="grid grid-cols-2 gap-4 grid-flow-row">
          <div className="text-center box-container relative bg-white row-start-1 row-end-3">
            <img
              src="https://thebrowncurves.com/wp-content/uploads/2021/08/GRID-RESIN.jpg"
              alt=""
              className="w-full h-[100%]"
            />
            <div className="h-full w-full absolute border-[1px] border-[#f37272] top-0 left-0 box-design"></div>
            <div className="text-over text-[30px] font-bold p-5">Metal tray with hands</div>
          </div>

          {/* <div class=" text-center bg-white col-start-2 col-end-4">B</div> */}
          <div class=" text-center bg-white box-container relative">
            <img
              src="https://thebrowncurves.com/wp-content/uploads/2021/08/4318630ded8098de8fa7b9608978c365.jpg"
              alt=""
              className="w-full h-[300px]"
            />
                        <div className="h-full w-full absolute border-[1px] border-[#f37272] top-0 left-0 box-design"></div>
            <div className="text-over text-[30px] font-bold p-5">Metal tray with hands</div>
          </div>
          <div class=" text-center bg-white box-container relative">
            <img
              src="https://thebrowncurves.com/wp-content/uploads/2021/07/B1.jpg"
              alt=""
              className="w-full h-[300px]"
            />
                        <div className="h-full w-full absolute border-[1px] border-[#f37272] top-0 left-0 box-design"></div>
            <div className="text-over text-[30px] font-bold p-5">Metal tray with hands</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostPopular;
