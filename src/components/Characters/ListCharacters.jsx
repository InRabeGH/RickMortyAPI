import { useState, useEffect } from 'react';
import axios from 'axios';

// Bootstrap
import { Row, Col, Card, Button, Badge } from 'react-bootstrap';

const ListCharacters = () => {
    //States
    const [characters, setCharacters] = useState([]);

    //Variables
    const url = "https://rickandmortyapi.com/api/character";
    
    //Ciclo de vida 
    useEffect(() => {
        const fetchCharaters = async () => {
            const response = await axios.get(url);
            setCharacters(response.data.results);
        };

        fetchCharaters();
    }, [])

    return (
        <Row>
            {characters.map((character) => {
                
                return (
                    <Col sm = "3" className = "p-3" key = {character.id}>
                        <Card style={{ width: '16rem' }}>
                            <Card.Img variant="top" src={character.image} />
                            <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                                
                            </Card.Text>
                            <div>
                                <Badge variant={character.status === "Alive" ? "success" : character.status === "Dead" ? "danger" : "secondary"} className = "mx-0">{character.status}</Badge>{' '}
                                <Badge variant="warning" className = "mx-1">{character.species}</Badge>{' '}
                                <Badge variant="info" className = "mx-1">{character.gender}</Badge>{' '}
                            </div>
                            <p></p>
                            <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })};
        </Row>
    );
} 

export default ListCharacters;