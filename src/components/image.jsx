import React ,{useState,useEffect} from 'react'
const ImageLoad = React.memo(({src,placeholder,alt=""})=>{
    const [currentSrc,updatedSrc]=useState(placeholder)
    const [loading ,setLoading]=useState(true)
    useEffect(() => {
        const ImageLoad= new Image();
        ImageLoad.src= src;
        ImageLoad.onload=()=>{
            setLoading(false);
            updatedSrc(src)
        }
    }, [src])
    return(
        <img src={currentSrc}
        style={{
            opacity:loading?0.5:1,
            transition:"opacity .15s liner ",
            position: "absolute",
            maxWidth: 100,
            left: 4,
            top: 0,
            maxHeight: 140,
        }}
        alt={alt}
        >
        </img>
    )
})
export default ImageLoad;