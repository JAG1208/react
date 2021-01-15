//import React from  'react';
import {Col,Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import "./birra.css";
const Birra = ({abv,description,first_brewed,ibu,id,image_url,name,tagline,food_pairing}) => {
    const [isFlipped,setIsFlipped]=useState(false);
    const handleClick=() =>{
        setIsFlipped(!isFlipped);
    }
    return (
        <Col md={4} className="mt-3 mb-3 text-centerr">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

               <Card className="contenedor"> 
                <Card.Header style={{backgroundColor:'#f88f01',textAlign:"center",color:"#fff",fontSize:"18px",fontWeight:"700"}}>{name}</Card.Header>
                <Card.Img variant={"top"} src={image_url} className="mx-auto  w-50 d-block img-fluid photo"></Card.Img>
                
                <Card.Body>
                    <Card.Title style={{color:"#f88f01",textAlign:"center",marginTop:"30px"}}>{tagline}</Card.Title>

                    <Card.Title>
                        Fecha de lanzamiento: {first_brewed}</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'#f88f01'}}>
                  <Button  variant='link' onClick={handleClick} style={{textDecoration:"none",color:"white" ,textAlign:"center" ,fontSize:"18px",fontWeight:"700" }} className="btn d-block w-100">+Info</Button>
                        
                </Card.Footer>
            </Card> 
            <Card className="contenedor">
            <Card.Header className="text-center" style={{backgroundColor:'#f88f01'}}>{name}</Card.Header>

                <Card.Body>
                
                    <Card.Text>
                        <p>DESCRIPTION: {description}</p>
                        <p>  %Alcohol: {abv}     IBU: {ibu}</p>
                    
                        <p>Food pairing: {food_pairing}</p>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer style={{backgroundColor:'#f88f01'}}>
                        <Button  variant='link' onClick={handleClick} size="sm" ><FontAwesomeIcon icon={faReplyAll} size="2x" color="white"  /></Button>
                </Card.Footer>
            </Card> 
            </ReactCardFlip>
            
        </Col>
    )
}
export default Birra;