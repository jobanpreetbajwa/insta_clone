import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiCompass1 } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
export default function Top() {
  const [messages, setMessages] = useState(4);
  return (
    <div className="flex w-full p-2 h-12 outline outline-b-2 capitalize md:flex-col md:justify-start md:h-auto md:w-16 md:gap-4">
      <div className="md:hidden flex mr-auto md:mr-0 md:flex-col items-center ">
        <p className="md:hidden">instagram</p>
      </div>
      <div className="md:hidden flex gap-2 text-xl items-center">
        <CiHeart />
        <FaRegCommentDots />
        <span className="flex justify-center bg-rose-600 h-5 w-5 rounded-full  text-base  -mt-4 -ml-4">
          {messages}
        </span>
      </div>
      
      
      <div className="hidden md:visible md:flex grow md:flex-col gap-24 md:items-center md:w-12">
        <p className=" md:visible md:text-3xl mt-8 ">{<FaInstagramSquare/>}</p>
            <ul className="text-black justify-between flex flex-col gap-14 text-3xl">
              <li ><IoHome/></li>
              <li><CiCompass1/></li>
              <li><MdOutlineSlowMotionVideo/></li>
              <li><CiSquarePlus/></li>
              <li><CiHeart/></li>
              <li className="relative"><FaRegCommentDots/>
              <span className="flex absolute top-2 left-9 justify-center bg-rose-600 h-5 w-5 rounded-full  text-base  -mt-4 -ml-4">
                  {messages}
              </span>
              </li>
            </ul>
            <p className=" text-3xl"><HiMenu/></p>
      </div>
    </div>
  );
}
