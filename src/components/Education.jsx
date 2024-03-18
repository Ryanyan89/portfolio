import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Highschool from './../Images/highschool.jpg'
import Langara  from './../Images/Langara.jpg'

import '../styling/Education.css'

function Education() {
    return (
        <>
        <Container id='education'>
            <Row>
                <h1>Education</h1>
            </Row>
            <Row id='info'>
                <Col md='3'>
                    <h5>Windermere Secondary School</h5>
                    <img src={Highschool} alt="Picture of Windermere Secondary School" id='highschool'/>
                    <ul>
                        <li><a href="https://www.vsb.bc.ca/windermere">Windermere Secondary School</a></li>
                    </ul>
                </Col>
                <Col id='windermere-info'>
                    <p>
                        This school started my joy for programing in grade 11 and I have continued coding ever since.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md='3'>
                    <h5>Langara College</h5>
                    <img src={Langara} alt="Picture of Langara college" id='Langara'/>
                    <ul>
                        <li><a href="https://langara.ca/">Langara College</a></li>
                    </ul>
                </Col>
                <Col id='Langara-info'>
                    <p>
                        My current school working my way to trasnfer to Simion Faser university. This is the second
                        semester of my second year.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Education