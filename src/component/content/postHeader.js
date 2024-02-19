import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
export default function Postheader() {
  return (
    <div className=" bg-white pt-1 flex gap-2 items-center outline outline-white">
      <div className="flex h-10 w-10 ">
        <img src="coffee1.webp" className="w-full rounded-full "></img>
      </div>
      <div className="flex flex-col capitalize">
        <p>name</p>
        <span className="inline-block text-left">
          <CiLocationOn />
        </span>
      </div>
      <div className="ml-auto text-xl">
        <BsThreeDots />
      </div>
    </div>
  );
}
