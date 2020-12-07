import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import data from '.././data.json'
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
export default function GridLayout(props) {
  useEffect(()=>{
    console.log(data.movies);
  })
     const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
    return (
         <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" style={{marginTop:'140px'}} spacing={2} >
          {data.movies.map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} style={{position:'relative'}}>
              <img src={value.posterUrl} style={{position:'absolute',maxWidth:100,left:4,top:0,maxHeight:140}}/>

              </Paper>
              {/* <span className="title" style={{maxWidth:100}}></span> */}
<Typography variant="h6" nowWrap style={{width:100}} component="h2">
{value.title}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
    )
}
