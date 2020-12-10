import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import data from '.././data.json';
import sampleImage from '.././assets/sample.jpg'
import promise from 'promise'
import Loader from '../components/loader';
import Popup from '../components/popup'
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
    const imageObj = new Image()
    imageObj.addEventListener('load', function imgOnLoad() {
      resolve(this);
    });

    imageObj.addEventListener('error', function imgOnError() {
      reject();
    })
    imageObj.src = URL;

  })
  return imagePromise;

  // var tester=new Image();
  // tester.onload=imageFound(URL);
  // tester.onerror=imageNotFound(URL);
  // tester.src=URL;
}

// function imageFound(URL,index) {
//   // imageArray=[...imageArray,URL]
// const imageData={
//   id:index,
//   image:URL
// }
// imageArray.push(imageData)
// }

// function imageNotFound(URL,index) {
//  const imageData={
//   id:index,
//   image:sampleImage
// }
//   // imageArray=[...imageArray,sampleImage]
//   imageArray.push(imageData)
// }

export default function GridLayout(props) {
  const [loading, setLoading] = useState(false)
  const [popup, showPopup] = useState(false)
  const [popupData, setPopup] = useState({})

  const [images, setImages] = useState([])

  useEffect(() => {
    data.movies.map(values => {
      setLoading(true)
      
      testImage(values.posterUrl).then(

        function fulfilled(img) {
          console.log('That image is found and loaded', img);
          const newImage = {
            id: values.id,
            image: img.currentSrc
          }
          setImages((images)=>[...images,newImage])
          // setImages(images => [...images, {
          //   id: values.id,
          //   image: img.currentSrc
          // }])
          
          // setImages(newImage)

        },
        function rejected() {
          console.log('That image was not found');
          setLoading(false);
        }
      );
    })
  }, [])
  function handleClick(value){
    console.log(value);
    showPopup(!popup)
    setPopup(value)
  }
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  console.log(images);
  return (
    <div>

      {loading ? <Loader /> : <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" style={{ marginTop: '140px' }} spacing={2} >
            {data.movies.map((value) => (
              <Grid key={value.id} item onClick={()=>handleClick(value)}>
                <Paper className={classes.paper} style={{ position: 'relative' }}>
                  {images.map(items => {
                    <div>
                      <img key={items.id} src={items.image} style={{ position: 'absolute', maxWidth: 100, left: 4, top: 0, maxHeight: 140 }} />
                      <span >{items.id}</span>
                    </div>

                  })
                  }

                </Paper>
                <Typography variant="h6" style={{ width: 100 }} component="h2">
                  {value.title}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>}
      {popup?<Popup/>:''}
    </div>

  )
}
