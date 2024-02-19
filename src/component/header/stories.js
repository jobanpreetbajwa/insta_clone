import React from "react";

export default function Stories({ item }) {
  return (
    <div className="flex flex-col items-center justify-center ml-6 ">
      <div className="flex h-16 w-16 ">
        <img
          src="coffee1.webp "
          className="w-full rounded-full outline outline-2 outline-rose-700"
        ></img>
      </div>
      <p>{item.id}</p>
    </div>
  );
}
