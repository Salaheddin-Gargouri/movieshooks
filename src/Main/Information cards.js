import React from "react";
import { useParams } from "react-router-dom";

const Information = ({ movies }) => {
  const params = useParams();
  const moviess = movies.find((el) => el.id === Number(params.id));

  return (
    <div
      style={{
        width: "100%",
        height: "800px",
      }}
    >
      <h1 style={{ color: "white" }}>{moviess.title}</h1>

      <iframe
        width="100%"
        height="50%"
        src={moviess.videoURL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3 style={{ color: "white" }}>{moviess.texte}</h3>
    </div>
  );
};

export default Information;
