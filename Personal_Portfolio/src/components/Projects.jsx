import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LostProject from './../Images/Lost-Project.jpg'
import WIP from './../Images/WIP.png'

import '../styling/Projects.css'

function Projects() {
    return (
        <>
        <Container id='projects'>
            <Row>
                <h1>Projects</h1>
            </Row>
            <Row>
                <Col md='3'>
                    <h5>Tower Defense Game</h5>
                    <img src={LostProject} alt="Lost Project" id='Lost-project' />
                </Col>
                <Col id='TD-game'>
                    <p>
                        This was a project I worked on at the end of Highschool. It was a tower defense game
                        however, I have lost it. It was incomplete, but in a state I was some what happy in
                        because it was my first time making one.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col md='3'>
                    <h5>Health Website</h5>
                    <img src={WIP} alt="WIP project" id='WIP'/>
                    <ul>
                        <li><a href="https://github.com/RainZhao01/2350_project">Github Project Repo</a></li>
                    </ul>
                </Col>
                <Col id='Health-website'>
                    <p>
                        This is a group project I am making as part of one of my langara class.
                        The purpose of this website is to help people stay health. We will help them
                        eat healthier and exericse better. We will do this by providing them a place to
                        easily locate health food and different exericse.
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default Projects