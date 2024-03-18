import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import '../styling/Projects.css'

function Projects() {
    return (
        <>
        <Container id='projects'>
            <Row>
                <h1>Projects</h1>
            </Row>
            <Row id='info'>
                <p>
                    Random text <br />
                    Random text <br />
                    Random text <br />
                </p>
            </Row>
        </Container>
        </>
    );
}

export default Projects