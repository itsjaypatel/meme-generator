import React, { useState } from "react";
import Draggable from "react-draggable";

export const Text = ({style}) => {
    const[ editMode, setEditMode] = useState(false);
    const [val,setVal] = useState("Double Click To Edit") 

    const toggleEditMode = (event) => {
        if(event.key === 'Enter'){
            setEditMode(!editMode);
        }
    }

    
    return (
        
        <Draggable>
            {
                editMode ?
                    <input className="edit-text-box" style = {style} value={val} onChange={(e) => setVal(e.target.value)} onKeyDown={toggleEditMode}/>
               :
                    <div style={style} onDoubleClick={() => setEditMode(!editMode)}>{val}</div>
            }
        </Draggable> 
        
    );
}