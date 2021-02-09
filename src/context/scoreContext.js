import React, { createContext,useState } from "react";
export const ScoreContext = createContext([[],() => {}])
export const ScoreProvider=(props)=>{
    const [score,setScore] = useState([]);
    return(
        <ScoreContext.Provider value={[score,setScore]}>
            {props.children}
        </ScoreContext.Provider>
    )
}