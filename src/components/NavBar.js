import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from './Brand'
import CartWidget from './CartWidget'
import NavBarItems from './NavBarItems';


function NavBar() {
                    return (
                        <>
                            <Navbar expand="xl" bg="dark" variant="dark">
                                <Container>
                                    <Navbar.Brand>
                                        <Brand />
                                    </Navbar.Brand>
                                    <Nav className="me-auto justify-content-end flex-grow-1 pe-3">
                                        <NavBarItems />
                                    </Nav>
                                    <Nav className="me-auto" >
                                        <CartWidget />
                                    </Nav>
                                </Container>
                            </Navbar>
                        </>
                    );
}

export default NavBar;