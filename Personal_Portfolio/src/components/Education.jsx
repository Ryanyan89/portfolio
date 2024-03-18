import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import '../styling/Education.css'

function Education() {
    return (
        <>
        <Container id='education'>
            <Row>
                <h1>Education</h1>
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

export default Education