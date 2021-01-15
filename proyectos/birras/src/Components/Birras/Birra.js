//import React from  'react';
import {Col,Card,Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReplyAll } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import ReactCardFlip from 'react-card-flip';

const Birra = ({abv,description,first_brewed,ibu,id,image_url,name,tagline,food_pairing}) => {
    const [isFlipped,setIsFlipped]=useState(false);
    const handleClick=() =>{
        setIsFlipped(!isFlipped);
    }
    return (
        <Col md={4} className="mt-3 mb-3 text-centerr">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">

               <Card style={{width:"350px",height:"560px"}}> 
                <Card.Header style={{backgroundColor:'#f88f01',textAlign:"center",color:"#fff",fontSize:"18px",fontWeight:"700"}}>{name}</Card.Header>
                <Card.Img variant={"top"} src={image_url} className="mx-auto  w-50 d-block img-fluid" style={{maxHeight:"250px",maxWidth:"250px",objectFit:"scale-down",paddingTop:"20px"}}></Card.Img>
                
                <Card.Body>
                    <Card.Title style={{color:"#f88f01",textAlign:"center",marginTop:"30px"}}>{tagline}</Card.Title>

                    <Card.Title style={{marginTop:"30px", color:"#989c99"}}>
                        Primera eleboracion: {first_brewed}</Card.Title>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'#f88f01'}}>
                  <Button  variant='link' onClick={handleClick} style={{textDecoration:"none",color:"white" ,textAlign:"center" ,fontSize:"18px",fontWeight:"700" }} className="btn d-block w-100">+Info</Button>
                        
                </Card.Footer>
            </Card> 
            <Card style={{width:"350px",height:"560px"}}>
            <Card.Header className="text-center" style={{backgroundColor:'#b6ed11',fontWeight:"700",fontSize:"18px",color:"white"}}>{name}</Card.Header>

                <Card.Body>
                
                    <Card.Text>
                      <p style={{fontSize:"14px"}} > <span style={{fontWeight:"bold"}}> DESCRIPTION: </span>  {description}</p>
                        <table>
                            <tr>
                                <td style={{fontWeight:"bold",fontSize:"14px"}}>%ALCOHOL:</td>
                                <td style={{paddingRight:"50px",paddingLeft:"10px"}}>{abv}</td>
                                <td style={{fontWeight:"bold",fontSize:"14px"}}>IBU:</td>
                                <td style={{paddingLeft:"10px",fontSize:"14px"}}>{ibu}</td>
                            </tr>
                        </table>
                    
                        <p style={{fontSize:"14px"}}><span style={{fontWeight:"bold"}}>Food pairing: </span>{food_pairing}</p>
                    </Card.Text>
                    
                </Card.Body>
                <Card.Footer style={{backgroundColor:'#b6ed11'}}>
                        <Button  variant='link' onClick={handleClick} size="sm" ><FontAwesomeIcon icon={faReplyAll} size="2x" color="white"  /></Button>
                </Card.Footer>
            </Card> 
            </ReactCardFlip>
            
        </Col>
    )
}
export default Birra;