import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

export const MemeCard = ({ meme, onClickHandler, action }) => {
    const navigate = useNavigate();
    return (
        <Card style={{ width: '18rem', margin: "50px", display:"flex", flexDirection:"column", boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}}>
            <Card.Img variant="bottom" src={meme.url} style={{backgroundPosition: "center", "backgroundSize": "cover", height:"250px" , width:"100%", padding: "10px"}}/>
            <Card.Body>
                <Card.Title>{meme.name}</Card.Title>
                <Button variant="primary" onClick={() => navigate(`/edit/${btoa(meme.url)}`)}>Edit</Button>
            </Card.Body>
        </Card>
    );
}