import {React, useState, useRef, useEffect} from "react";
import { AppTitle } from "../components/AppTitle";
import { useParams, useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Text } from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";
import undoButton  from '../resources/rotate-left-solid.svg';

export const Edit = () => {
    const params = useParams();
    const [textBoxes,setTextBoxes] = useState([]);
    const memeRef = useRef();
    
    const createTextBox = (event) => {
        setTextBoxes([...textBoxes,<Text style={{"position": "absolute", left: event.clientX + "px", top: event.clientY + ""}}/>])
    }

    const undoAction = (event) => {
        textBoxes.pop();
        setTextBoxes([...textBoxes])
    }

    return (
        <div className="edit-page-container">
            
            <AppTitle/>
            {/* <Button variant="secondary" onClick={undoAction}>Undo</Button> */}
            <br/>   
            <br/>
            <p style={{color:"red"}}>Double Click on Image To Add Text</p>   
            <div ref={memeRef} className="edit-meme-container">
                <img src={atob(params["url"])} style={{height: "400px", width:"fit-content"}} onDoubleClick={createTextBox}></img>
                {textBoxes.map(text => text)}
            </div>
            <Button className="mx-1 my-2" variant="success" onClick={() => exportComponentAsJPEG(memeRef,{"fileName": `meme-${new Date().getTime()}.jpeg`})}>Save</Button>
        </div>
    );
}