import React from "react";
import "./popup.css";
import CloseIcon from "@material-ui/icons/Close";
import sampleImage from "../assets/sample.jpg";
import ImageLoad from "./image";
export default function Popup(props) {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="row">
          <h3>{props.title}</h3>
          <CloseIcon
            onClick={props.handleClose}
            style={{
              float: "right",
              position: "absolute",
              top: "32px",
              right: "18px",
            }}
          />
          <hr />
        </div>
        <div className="row">
          <div className="col-md-6 float-left" style={{ float: "left" }}>
            {/* <img src={props.image} alt="movie-image"style={{maxHeight:"250px"}}/> */}
            <ImageLoad
              src={props.image}
              placeholder={sampleImage}
              alt="placeholder"
              style={{ maxHeight: "250px", position: "relative" }}
            />
          </div>
          <div className="col-md-6">
            <span className="text">
              {" "}
              <p style={{ fontWeight: "500" }}>Directed By:</p>{" "}
              {props.directedBy}
            </span>
            <span className="text">
              <p style={{ fontWeight: "500" }}>cast:</p> {props.cast}
            </span>
            <hr />
            <span className="rating">Movie Plot: {props.plot}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
