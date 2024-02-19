import React, { useState } from "react";
import Postheader from "./postHeader.js";
import Postfooter from "./postfooter.js";
import { FaUserTag } from "react-icons/fa";
export default function Posts() {
  const [imageHover, setImagehover] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2 h-fit mt-4 bg-white w-96 ">
        <Postheader />
        <div
          className="bg-white h-fit "
          onMouseEnter={() => {
            setImagehover(true);
          }}
          onMouseLeave={() => {
            setImagehover(false);
          }}
        >
          <img src="apple.avif" className="w-full "></img>
        </div>
        <div className="font-serif font-bold capitalize mx-2 relative">
          <span
            className={` ${
              imageHover
                ? "absolute flex items-center justify-center text-lg -top-9 bg-white rounded-full w-6 h-6"
                : "hidden"
            }`}
          >
            <FaUserTag />
          </span>
          <Postfooter />
          <div className="flex gap-1">
            <p className="">like by</p>
            <p className="">_username_</p>
            <p className="">and others</p>
          </div>
          <div className="font-normal font-serif flex gap-2">
            <p>username</p>
            <p> caption...</p>
          </div>
        </div>
      </div>
    </>
  );
}
