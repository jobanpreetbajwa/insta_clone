import React from "react";

export default function Stories({ item }) {
  return (
    <div className="flex flex-col items-center ml-6 ">
      <div className="flex h-20 w-20 ">
        <img
          src="coffee1.webp "
          className="w-full rounded-full outline outline-1"
        ></img>
      </div>
      <p>{item.id}</p>
    </div>
  );
}
