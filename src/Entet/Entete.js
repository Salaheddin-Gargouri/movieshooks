import React from "react";
import Button from "react-bootstrap/Button";
import "./Entete.css";
import { Dropdown, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "./../Main/Home";

const Entete = () => {
  return (
    <div
      className="Main1"
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        height: "80px",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStknQpv3ITqEH0QyfE7Cm4wyg5mcCJmDDOCQ&usqp=CAUs"
        alt="logo"
      />

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to={"/Home"}>
          <Button
            style={{
              marginTop: "25px",

              width: "130px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "25px",
              marginLeft: "25px",
            }}
            variant="outline-danger"
          >
            Home
          </Button>{" "}
        </Link>
        <Link to={"/Movies"}>
          <Button
            style={{
              marginTop: "25px",

              width: "130px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "25px",
              marginLeft: "25px",
            }}
            variant="outline-danger"
          >
            Movies
          </Button>
        </Link>
        <Button
          style={{
            marginTop: "25px",

            width: "130px",
            height: "32px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="outline-danger"
        >
          TV Series
        </Button>{" "}
        <Spinner
          animation="grow"
          variant="light"
          style={{ marginTop: "25px", marginLeft: "25px", marginRight: "10px" }}
        />
      </div>
    </div>
  );
};

export default Entete;
