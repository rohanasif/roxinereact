import React from "react";

function HomeHeader() {
  return (
    <div className="flex justify-center mt-20">
      <div className="flex flex-col">
        <div className="text-[28px] font-semibold text-white tracking-[4px]">
          GRAPHICS. WEB. DIGITAL.
        </div>
        <div className="text-[152px] font-black text-white tracking-[23px]">
          START-UP
        </div>
        <div className="text-white w-[50%] text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minus
          illum magnam dolorem blanditiis architecto temporibus veniam debitis
          dicta voluptatum.
        </div>
        <button className="mt-10 text-white bg-[#5645ff] border-[#5645ff] w-[200px] h-[50px] tracking-[2.29px] px-[25px]">
          EXPLORE WORK
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
