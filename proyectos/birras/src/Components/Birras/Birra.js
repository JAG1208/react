//import React from  'react';
import {Col,Card,Button} from 'react-bootstrap';
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
                <Card.Header>{name}</Card.Header>
                <Card.Img variant={"top"} src={image_url} className="photo"></Card.Img>
                
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        <p>{tagline}</p>
                        <p>Fecha de lanzamiento: {first_brewed}</p>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                        <Button  variant="light" block     onClick={handleClick}>+ Info</Button>
                </Card.Footer>
            </Card> 
            <Card className="contenedor">
            <Card.Header className="text-center">{name}</Card.Header>

                <Card.Body>
                
                    <Card.Text>
                        <p>DESCRIPTION: {description}</p>
                        <p>  %Alcohol: {abv}     IBU: {ibu}</p>
                    
                        <p>Food pairing: {food_pairing}</p>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer>
                        <Button type="button" variant="primary" block onClick={handleClick}>+ Info</Button>
                </Card.Footer>
            </Card> 
            </ReactCardFlip>
            
        </Col>
    )
}
export default Birra;