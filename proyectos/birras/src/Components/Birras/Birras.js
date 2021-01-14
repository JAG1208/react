//componentes de logica (peticion http +map)
//import {useEffect,useState} from "react";
import {Row} from 'react-bootstrap';
import { useFetch } from "./../../customHooks/useFetch";
//import ClipLoader from "react-spinners/ClipLoader";
import Birra from './Birra';
import Loading from './../Loading';
//const BASE_URL="https://api.punkapi.com/v2";
//const endpoint="beers"

const Birras = () => {
    const [data,fetching,error]=useFetch('beers');
    //const [birras]=data;
    return (  
        <Row>
            {fetching
            ? (<Loading />)
            : (data.map((birra) => (
                <Birra key={birra.id} {...birra} />
            ))
            
            )}
        </Row>

        
        );
}
export default Birras;