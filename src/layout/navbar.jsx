import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideBar from "./sideBar.jsx";
import Filter from "../components/filter";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { MovieContext } from "../context/movieContext";
import Combobox from "../components/combobox.js";
import { UserContext } from "../context/userContext";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const [users, setUsers] = useContext(UserContext);
  let history = useHistory();
  const [title, setTitle] = useState("Movie List");
  const apiCall = async function () {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
     const userNames =    response.data.map(users=>{
      return { value:users.name };
        })
    setUsers(...users, userNames);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  useEffect(() => {
    apiCall();
    history.listen(() => {
      setTitle(window.location.pathname);
    });
  }, [setTitle]);
  const routePath = window.location.pathname;
  const classes = useStyles();
  console.log(users);
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="fixed" style={{ background: "#171616" }}>
          <Toolbar>
            <ul
              className="navbar-list"
              style={{ fontSize: 12, display: "inline", position: "absolute" }}
            >
              <li>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  {" "}
                  Must watch movies
                </Link>
              </li>
              <li>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/score"
                >
                  Live Score
                </Link>
              </li>
            </ul>
            <Typography variant="h6" className={classes.title}>
              {title == "/" ? "MovieList" : "Live Score"}
            </Typography>
            {title == "/" ? <Combobox items={users} /> : ""}

            {title == "/" ? <Filter /> : ""}

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <SideBar />
    </div>
  );
}
