import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMWZhZDJmN2VjMmZjZGM2ZWU1M2E5OTg2Y2IyM2QwYSIsIm5iZiI6MTc4MzMzNzY1MS43OTUsInN1YiI6IjZhNGI5MmIzMjJlNjdjOTc4OTBkNzk5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d909YKIZUuHsWmmcENPLBMksLzj7vVdwFyn8D1e_cUc",
    },
  };

  useEffect(() => {
    console.log("Movie ID:", id);

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        console.log("Video key:", response.results[0]?.key);

        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        } else {
          console.log("No video found for this movie.");
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => navigate("/")} />

      {apiData.key ? (
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading video...</p>
      )}

      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ""}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
