import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';
export default function MemeCard(props) {
 
    const navigate= useNavigate();
    return (
        <Card style={{ width: '18rem' , margin:'25px' }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
           
            <Button onClick={(e)=> navigate(`./edit?url=${props.img}`)} variant="primary">Edit</Button>
          </Card.Body>
        </Card>
      );
}
