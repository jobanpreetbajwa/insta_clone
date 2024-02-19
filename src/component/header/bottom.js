import React, { useEffect, useState } from "react";
import Stories from "./stories";
import users from "../../dummyUsers";
export default function Bottom() {
  const [activeStories, setActivestories] = useState([]);

  useEffect(() => {
    setActivestories(users);
  }, []);
  return (
    <div className="flex gap-2 p-2">
      {activeStories.map((item, i) => {
        return <Stories kry={i} item={item} />;
      })}
    </div>
  );
}
