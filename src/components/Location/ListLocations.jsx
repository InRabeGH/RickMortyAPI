import { useState, useEffect } from 'react';
import axios from 'axios';

// Bootstrap
import { Row, Col, Card } from 'react-bootstrap';

//Separador de episodios
import SeparadorResidentes from "./SeparadorResidentes";

const ListLocations = () => {
    //States
    const [Locations, setLocations] = useState([]);

    //Variables
    const url = "https://rickandmortyapi.com/api/location";
    
    //Ciclo de vida 
    useEffect(() => {
        const fetchLocations = async () => {
            const response = await axios.get(url);
            setLocations(response.data.results);
        };

        fetchLocations();
    }, [])

    return (
        <Row>
            {Locations.map((Location) => {
                
                return (
                    <Col key = {Location.id} sm = "6" className = "p-3" >
                        <Card style={{ width: '28rem' }} >
                            <Card.Img variant="top" src={Location.image} />
                            <Card.Body>
                                <Card.Title>{Location.name}</Card.Title>
                                <Card.Text>
                                    
                                </Card.Text>
                                <div>
                                    <h6 className = "mx-1">Tipo: {Location.type}</h6>{' '}
                                    <h6 className = "mx-1">Dimension: {Location.dimension}</h6>{' '}
                                    {/*<h6 className = "mx-1">{Location.url}</h6>{' '}*/}
                                    <h6 className = "mx-1">Creado: {Location.created}</h6>{' '}
                                    {/*<h6 className = "mx-1">{Location.residents}</h6>{' '} */}
                                    <h6 className = "mx-1">Personajes: <SeparadorResidentes residentes = { Location.residents } id = {Location.id}/></h6>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })};
        </Row>
    );
} 

export default ListLocations;