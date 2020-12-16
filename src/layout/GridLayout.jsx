import React, { useEffect, useState,useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {MovieContext} from '../context/movieContext'
import sampleImage from ".././assets/sample.jpg";
import promise from "promise";
import Loader from "../components/loader";
import Popup from "../components/popup";
import ImageLoad from "../components/image";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
function testImage(URL) {
  const imagePromise = new promise(function imagePromise(resolve, reject) {
    const imageObj = new Image();
    imageObj.addEventListener("load", function imgOnLoad() {
      resolve(this);
    });

    imageObj.addEventListener("error", function imgOnError() {
      reject();
    });
    imageObj.src = URL;
  });
  return imagePromise;
}

export default function GridLayout(props) {
  const [loading, setLoading] = useState(false);
  const [popup, showPopup] = useState(false);
  const [popupData, setPopup] = useState({});
const [movies,setMovies] = useContext(MovieContext);
 
  useEffect(() => {}, []);
  function handleClick(value) {
    console.log(value);
    showPopup(!popup);
    setPopup(value);
  }
  function popupClose() {
    document.body.style.overflow = "auto";
    showPopup(!popup);
  }
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  console.log(movies);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid
              container
              justify="center"
              style={{ marginTop: "140px" }}
              spacing={2}
            >
              {movies[0].movies.map((value) => (
                <Grid key={value.id} item onClick={() => handleClick(value)}>
                  <Paper
                    className={classes.paper}
                    style={{ position: "relative" }}
                  >
                    <ImageLoad src={value.posterUrl}
                    placeholder={sampleImage}
                    alt='placeholder'/>
                  </Paper>
                  <Typography
                    variant="h6"
                    style={{ width: 100 }}
                    component="h2"
                  >
                    {value.title}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
      {popup ? (
        <Popup
          image={popupData.posterUrl}
          directedBy={popupData.director}
          title={popupData.title}
          cast={popupData.actors}
          plot={popupData.plot}
          handleClose={() => popupClose()}
        />
      ) : (
        ""
      )}
    </div>
  );
}
