import React, { useState, useEffect } from "react";
import Posts from "./posts.js";
import users from "../../dummyUsers";
export default function Postcontent() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(users);
  }, []);
  return (
    <div className="h-screen flex gap-4 flex-col items-center bg-slate-50 overflow-scroll">
      {posts.map((item, i) => {
        return <Posts item={item} key={i} />;
      })}
    </div>
  );
}
