import React from "react";
import Top from "./top";
import Bottom from "./bottom";
export default function Header() {
  return (
    <>
      <div className="flex flex-col  bg-white">
        <Top />
        <Bottom />
      </div>
    </>
  );
}
