import { useState, useEffect } from 'react';
import axios from 'axios';

//import { Row } from 'react-bootstrap';

const IdentificadorPersonajes = (props) => {
    //States
    const [Caracteristicas, setCaracteristicas] = useState([]);

    //Variables
    const url = "https://rickandmortyapi.com/api/character";
    const idPersonaje = props;

    //Ciclo de vida 
    useEffect(() => {
        const fetchCaracteristicas = async () => {
            const response = await axios.get(url);
            setCaracteristicas(response.data.results);
        };

        fetchCaracteristicas();
    }, [])

    if(Caracteristicas.id ===  idPersonaje){
        return  (
            <div>
                {Caracteristicas.name} 
            </div>
        );
    }else{

        return null;
    } 
}

export default IdentificadorPersonajes;