import React from "react";
import Top from "./top";
import Bottom from "./bottom";
import Postcontent from "../content/postContent";
import { CiCompass1 } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CiSquarePlus } from "react-icons/ci";
export default function Header() {
  return (
    <>
      <div className="flex flex-col bg-white md:flex-row">
        <Top />
        <div className="flex flex-col py-2 px-8 min-h-screen items-center relative">
          <Bottom />
          <Postcontent/>
          <div className=" md:hidden flex justify-center fixed bottom-0 w-full bg-black bg-opacity-80 h-14">
          <div className="flex items-center">
            <ul className="text-white flex gap-16 text-3xl">
              <li><IoHome/></li>
              <li><CiCompass1/></li>
              <li><MdOutlineSlowMotionVideo/></li>
              <li><CiSquarePlus/></li>
            </ul>
          </div>
        </div>
        </div> 
        <div className="lg:visible pt-8 px-2 border border-2 w-full">
        hello
      </div>
      </div>
    </>
  );
}
