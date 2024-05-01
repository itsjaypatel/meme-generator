import React, { useEffect, useState } from "react";
import { AppTitle } from "../components/AppTitle";
import { MemeCard } from "../components/Card";
import { fetchAllMemes } from "../api/memes";
import { Navigate } from "react-router-dom";

export const Home = () => {
    const [memes,setMemes] = useState([]);
    useEffect(() => {
        fetchAllMemes().then(memes => {
            console.log(memes.data.memes);
            setMemes(memes.data.memes);
        });
    },[])
    return (
        <div style={{display:"flex", alignItems:"center",justifyContent:"center", flexDirection: "column"}}>
            <AppTitle/>
            <div className="meme-container row" style={{margin: "10px auto"}}>
                {
                    memes.length > 0 && memes.map(el => <MemeCard meme={el} action="Edit"/>) 
                }
            </div>
        </div>
    );
}