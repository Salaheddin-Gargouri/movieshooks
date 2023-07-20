import React from "react";

import { Button } from "react-bootstrap";

import Conteur from "./Conteur";
const Home = ({ fil, search, ratefil, handelreting }) => {
  return (
    <div
      className="Homeimg"
      style={{
        width: "100%",
        height: "570px",
      }}
    >
      <img
        src="https://occ-0-116-1722.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABcSoIGOIwtr4yXNuGrngaev2JArgejsK9fkAqJRqM1BwV031mFZDpzXcO1mJtz4Bl_2sl1nr8qlU1IsfVnnB-Ic4i-cmIKj-HB2tocNqgKVhjHeNLHOOZ7SO_a2ex5497whIu8Oa1aUQLeLZRgX9b2OPNIc9QItO7ItjAHF6seE_sIWBU0nDFg.png?r=b6e"
        alt="logo"
      />{" "}
      <div>
        <h6
          style={{
            color: "white",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          Ils travaillent dans un restaurant de nouilles le jour et chassent les
          démons la nuit, en utilisant leurs capacités très spéciales pour
          protéger les humains des esprits.
        </h6>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <form
            style={{
              display: "flex",
              justifyContent: "row",
            }}
            action=""
            className="input"
            placeholder="Search"
          >
            <input
              style={{
                backgroundColor: "black",
                color: "white",
                width: "300px",
                borderColor: "#DC3545",
                borderRadius: "2px",
              }}
              type="texte"
              value={search}
              onChange={fil}
              placeholder="    Search Movies"
            />
            <Button
              style={{
                marginLeft: "20px",
                width: "130px",
                height: "32px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="outline-danger"
            >
              Search
            </Button>
          </form>

          <Conteur />
        </div>
      </div>
    </div>
  );
};

export default Home;
