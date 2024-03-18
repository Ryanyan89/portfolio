
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Me from '../Images/portfolio-picture.png' 

import '../styling/About-me.css'

function AboutMe() {
    return (
        <>
        <Container id='aboutMe' className='d-flex justify-content-center'>
            <Row>
                <h1>About me</h1>
                <img src={Me} alt="Picture of Me" id='pictureOfMe' />
            </Row>
            <Row id='info'>
                <p>
                    Currently a college student attending Langara college with the ambition
                    to transfer to SFU to futher his education before pursing a career in the
                    computer science feild.
                </p>
            </Row>
        </Container>
        </>
    )
}

export default AboutMe