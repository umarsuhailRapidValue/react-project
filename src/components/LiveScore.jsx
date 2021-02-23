import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./scss/livescore.css";
export default function LiveScore() {
  const [score, setScore] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php",
      params: { completedlimit: "5", inprogresslimit: "5", upcomingLimit: "5" },
      headers: {
        "x-rapidapi-key": "20703a853amsh9ac3a7258cd3bc6p19e092jsnd2b898ca0783",
        "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setScore([response.data.matchList]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setScore]);
  console.log(score);

  return (
    <div className="container" style={{ marginTop: 80 }}>
      {score[0]?.matches.map((value) => (
        <div className="card" style={{ marginTop: 10 }}>
          <div className="title" style={{ color: "black", fontWeight: 600 }}>
            {value.series.name}
          </div>
          <span style={{ color: "black" }}>{value.matchSummaryText}</span>
          <div
            className="homeTeam"
            style={{ float: "left", margin: 10, position: "relative" }}
          >
            {value.awayTeam.name}
            {value.awayTeam.isBatting ? (
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  top: "-13px",
                  left: " -2px",
                }}
              >
                Batting*
              </span>
            ) : (
              ""
            )}
            <hr />
            <span>Score:</span>

            <h2>{value.scores?.homeScore}</h2>
          </div>
          <div
            className="awayTeam"
            style={{ float: "right", margin: 10, position: "relative" }}
          >
            {value.homeTeam.name}
            {value.homeTeam.isBatting ? (
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  top: "-13px",
                  left: " -2px",
                }}
              >
                Batting*
              </span>
            ) : (
              ""
            )}
            <hr />
            <span>Score:</span>

            <h2>{value.scores?.awayScore}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
