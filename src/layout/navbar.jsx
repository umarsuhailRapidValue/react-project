import React, {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './sideBar.jsx'
import Filter from '../components/filter'
import {Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

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
  let history = useHistory();
const [title,setTitle]= useState('Movie List')
useEffect(() => {
  history.listen(() => {
   setTitle(window.location.pathname)
})
}, [setTitle])
  const routePath =  window.location.pathname;
      const classes = useStyles();
     const openSideBar=()=>{
       
        console.log('open menu');
      }
    return (
        <div>
            <div className={classes.root} >
      <AppBar position="fixed" style={{background:'#171616'}}>
        <Toolbar>
          <ul className="navbar-list" style={{fontSize:12,display:"inline"}}>
            <li>
            <Link style={{textDecoration:'none',color:'white'}} to="/"> Must watch movies</Link>

           
            </li>
            <li>
            <Link style={{textDecoration:'none',color:'white'}} to="/score">Live Score</Link>

            
            </li>
          </ul>
       <Typography variant="h6" className={classes.title}>
            {title=='/'?'MovieList':'Live Score'}
          </Typography>
          {title=='/'? <Filter/>:''}
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    <SideBar/>
        </div>
    )
}
