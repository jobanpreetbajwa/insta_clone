import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
export default function Top() {
  const [messages, setMessages] = useState(4);
  return (
    <div className="flex justify-between p-2  capitalize">
      <div className="flex mr-auto">
        <p>logo</p>
      </div>
      <div className="flex gap-2 text-xl items-center">
        <CiHeart />
        <FaRegCommentDots />
        <span className="flex justify-center bg-red-600 h-5 w-5 rounded-full  text-base  -mt-4 -ml-4">
          {messages}
        </span>
      </div>
    </div>
  );
}
