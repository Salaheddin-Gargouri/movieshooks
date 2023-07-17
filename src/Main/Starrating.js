import React from "react";

const Starrating = ({ rating, handelreting }) => {
  function stars(x) {
    let star = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        star.push(
          <span
            onClick={() => handelreting(i)}
            style={{ color: "gold", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else
        star.push(
          <span
            onClick={() => handelreting(i)}
            style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
          >
            ★
          </span>
        );
    }
    return star;
  }
  return <div>{stars(rating)}</div>;
};

export default Starrating;
