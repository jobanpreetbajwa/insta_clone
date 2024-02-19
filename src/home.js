import React from "react";
import Header from "./component/header/header";
import Postcontent from "./component/content/postContent";
import Chatlist from "./component/chat/chatList";

export default function Home() {
  return (
    <div>
      <Chatlist/>
      {/* <Header /> */}
      {/* <Postcontent /> */}
    </div>
  );
}
