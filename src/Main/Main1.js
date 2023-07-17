import React from "react";
import { Button } from "react-bootstrap";
import Starrating from "./Starrating";
import Conteur from "./Conteur";

const Main1 = ({ fil, search, ratefil, handelreting }) => {
  return (
    <div
      className="counter"
      style={{
        width: "1350px",
        height: "600px",
      }}
    >
      <div>
        <br></br> <br></br> <br></br> <br></br> <br></br>
        <h1
          style={{
            color: "#DC3545",
          }}
        >
          {" "}
          Films et séries en illimité, et bien plus
        </h1>
        <h3
          style={{
            marginTop: "80px",
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          Où que vous soyez. Annulez à tout moment.
        </h3>
        <h4
          style={{
            marginTop: "40px",
            marginBottom: "30px",
            color: "#FFFFFF",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          Prêt à regarder M movies ? Saisissez votre adresse e-mail pour vous
          abonner ou réactiver votre
        </h4>
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
        </div>
        <div
          style={{
            marginTop: "40px",
            marginRight: "30px",
          }}
        >
          <Starrating rating={ratefil} handelreting={handelreting} />
        </div>
      </div>
      <div
        className="barre"
        style={{
          display: "flex ",

          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: "80px",
          marginTop: "50px",
          width: "1191px",
          height: "60px",
        }}
      >
        <div
          style={{
            display: "flex ",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "800px",
          }}
        >
          <img
            style={{ width: "70px", height: "42px", paddingLeft: "20px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStknQpv3ITqEH0QyfE7Cm4wyg5mcCJmDDOCQ&usqp=CAUs"
            alt="logo"
          ></img>
          <h5
            style={{
              display: "flex ",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              width: "400px",
              height: "42px",
            }}
          >
            Regardez autant que vous voulez.
          </h5>
          <Conteur />
        </div>
      </div>
    </div>
  );
};

export default Main1;
