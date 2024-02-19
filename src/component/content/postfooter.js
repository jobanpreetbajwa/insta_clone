import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { CiSaveDown2 } from "react-icons/ci";
export default function Postfooter() {
  return (
    <div className="flex text-xl py-1">
      <div className="flex gap-4 ">
        <FaRegHeart />
        <FaRegComment />
        <LuSend />
      </div>
      <div className="ml-auto">
        <CiSaveDown2 />
      </div>
    </div>
  );
}
