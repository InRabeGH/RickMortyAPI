// Bootstrap
import { Container } from 'react-bootstrap';

// Components
import ListCharacters from "../components/Characters/ListCharacters"

const CharactersContainer = () => {
    return (
        <Container>
            <ListCharacters />
        </Container>
    )
}

export default CharactersContainer;