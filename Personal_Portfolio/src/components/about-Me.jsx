
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Me from './../Images/portfolio-picture.png' 

import '../styling/About-me.css'

function AboutMe() {
    return (
        <>
        <Container id='aboutMe' className='d-flex justify-content-center'>
            <Row>
                <Col md="3">
                <h1>About me</h1>
                <img src={Me} alt="Picture of Me" id='pictureOfMe' />
                <ul>
                    <li><a href="https://github.com/Ryanyan89">Github </a></li>
                    <li><a href="https://www.instagram.com/r_yan.yan/">Instagram </a></li>
                </ul>
                </Col>
                <Col id='rightSide'>
                <p>
                    Currently a college student attending Langara college with the ambition
                    to transfer to SFU to futher his education before pursing a career in the
                    computer science feild. Started coding in grade 11 and has been intrested
                    ever since. Bellow you will see information on my education and projcets I
                    have worked on.
                </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default AboutMe