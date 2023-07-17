import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AAddmovies = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(1);
  const handelsubmit = (e) => {
    e.preventDefault();
    const newmovie = {
      id: Math.random(),
      title: name,
      date: date,
      image: image,
      rating: rate,
    };
    if (name && date && image && rate) {
      add(newmovie);
      handleClose();
    } else {
      alert("Ajouter votre information");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0px",
      }}
    >
      <Button
        style={{
          marginTop: "25px",
          marginRight: "25px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "190px",
          height: "32px",
        }}
        variant="outline-danger"
        onClick={handleShow}
      >
        Ajouter un film
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ fontWeight: "600" }}>
            {" "}
            Ajouter un film
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handelsubmit} action="">
            <div>
              <label htmlFor=""> title :</label>
              <input
                style={{
                  width: "450px",
                  display: "flex",
                  flexDirection: "column",
                }}
                type="text"
                placeholder=" Titel"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Date :</label>
              <input
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "450px",
                }}
                type="text"
                placeholder=" Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=""> image:</label>
              <input
                style={{
                  width: "450px",
                  display: "flex",
                  flexDirection: "column",
                }}
                type="text"
                placeholder=" Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor=""> Rating :</label>
              <input
                style={{
                  width: "450px",
                  display: "flex",
                  flexDirection: "column",
                }}
                type="text"
                placeholder=" Rating"
                animation="glow"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="outline-danger" onClick={handleClose}>
                Close
              </Button>
              <Button
                style={{
                  marginLeft: "10px",
                }}
                variant="outline-danger"
                type="submit"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AAddmovies;
