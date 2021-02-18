import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideBar from "./sideBar.jsx";
import Filter from "../components/filter";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Downshift from "downshift";
import { MovieContext } from "../context/movieContext";

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

export default function Navbar(props) {
  const [movies, setMovies] = useContext(MovieContext);
  let history = useHistory();
  const [title, setTitle] = useState("Movie List");
  const [items, setNames] = useState([]);

  useEffect(() => {
    history.listen(() => {
      setTitle(window.location.pathname);
    });
    const names = movies[0].movies.map((movieList) => {
      return { value: movieList.title };
    });
    setNames(...items, names);
  }, [setTitle]);
  const routePath = window.location.pathname;
  const classes = useStyles();
  const openSideBar = () => {};
  console.log(items);
  const itemss = [
    { value: "apple" },
    { value: "pear" },
    { value: "orange" },
    { value: "grape" },
    { value: "banana" },
  ];
  console.log(itemss);
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
            <Downshift
                  onChange={(selection) =>
                    alert(`You selected ${selection.value}`)
                  }
                  itemToString={(item) => (item ? item.value : "")}
                >
                  {({
                    getInputProps,
                    getItemProps,
                    getLabelProps,
                    getMenuProps,
                    isOpen,
                    inputValue,
                    highlightedIndex,
                    selectedItem,
                  }) => (
                    <div style={{position:'relative',fontSize:12}}>
                      <label {...getLabelProps()}>Enter a movie name</label>
                      <input {...getInputProps()} />
                      <ul
                        {...getMenuProps()}
                        style={{
                          position: "absolute",
                          display: "inline-block",
    height: '100vh',
    overflow: 'auto',
    fontSize:' 12px',
    left: '0px',
    top: '30px',
    listStyle: 'none',
                        }}
                      >
                        {isOpen
                          ? items
                              .filter(
                                (item) =>
                                  !inputValue || item.value.includes(inputValue)
                              )
                              .map((item, index) => (
                                <li
                                  {...getItemProps({
                                    key: item.value,
                                    index,
                                    item,
                                    style: {
                                      backgroundColor:
                                        highlightedIndex === index
                                          ? "lightgray"
                                          : "black",
                                      fontWeight:
                                        selectedItem === item
                                          ? "bold"
                                          : "normal",
                                    },
                                  })}
                                >
                                  {item.value}
                                </li>
                              ))
                          : null}
                      </ul>
                    </div>
                  )}
                </Downshift>
            {title == "/" ? <Filter /> : ""}

            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <SideBar />
    </div>
  );
}
