import React, { useState } from "react";

const Conteur = () => {
  const [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex ",
        flexDirection: "row",
        width: "200px",
        height: "32px",
      }}
    >
      <ul>
        <li
          className="lii"
          style={{
            marginLeft: "500px",
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
            height: "32px",
          }}
          onClick={() => setCount(count + 1)}
        >
          <i class="fa-solid fa-face-smile-hearts fa-bounce"></i>
          {count}
        </li>
      </ul>
    </div>
  );
};

export default Conteur;
