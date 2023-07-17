import React from "react";
import CartItem from "./CartItem";

const CartList = ({ movies, del }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginleft: "60px",
        width: "250",
        height: "400px",
      }}
    >
      {movies.map((el) => (
        <CartItem el={el} del={del} />
      ))}
    </div>
  );
};

export default CartList;
