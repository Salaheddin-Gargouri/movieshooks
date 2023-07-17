import React from "react";
import Button from "react-bootstrap/Button";
import "./Entete.css";
import { Dropdown, Spinner } from "react-bootstrap";

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
        <Dropdown
          style={{
            marginTop: "25px",
            width: "140px",
            height: "32px",
          }}
        >
          <Dropdown.Toggle
            style={{
              width: "140px",
              height: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outline-danger"
            id="dropdown-basic"
          >
            Langue
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Français</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Anglais</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Arabe</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
          Abonnez-vous
        </Button>{" "}
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
          S'identifier
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
