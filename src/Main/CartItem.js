import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Starrating from "./Starrating";

const CartItem = ({ el, del }) => {
  return (
    <div>
      <Card
        style={{
          width: "250px",
          height: "470px",
          color: "white",
          borderColor: "#DC3545",
          backgroundColor: "black",
          margin: "60px",
        }}
      >
        <Card.Img className="a" variant="top" src={el.imagURL} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <Card.Text>
            <Starrating rating={el.rating} />
          </Card.Text>
          <Card.Text>{el.texte}</Card.Text>

          <Button
            style={{
              marginRight: "10px",
            }}
            variant="outline-danger"
            onClick={() => del(el.id)}
          >
            Delete
          </Button>
          <Button
            style={{
              marginRight: "10px",
            }}
            variant="outline-danger"
          >
            see
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CartItem;
