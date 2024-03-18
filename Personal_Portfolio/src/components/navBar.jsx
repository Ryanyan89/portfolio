import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='ms-1'>
                    <Navbar.Brand href="#About-Me">Ryan Yan</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#About-Me">About Me</Nav.Link>
                        <Nav.Link href="#Education">Education</Nav.Link>
                        <Nav.Link href="#Projects">Projects</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar