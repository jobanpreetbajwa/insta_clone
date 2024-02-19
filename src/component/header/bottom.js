import React, { useEffect, useState } from "react";
import Stories from "./stories";
import users from "../../dummyUsers";
export default function Bottom() {
  const [activeStories, setActivestories] = useState([]);

  useEffect(() => {
    setActivestories(users);
  }, []);
  return (
    <div className="flex gap-2 pt-4 md:pt-8  justify-center overflow-scroll">
      {activeStories.map((item, i) => {
        return <Stories key={i} item={item} />;
      })}
    </div>
  );
}
