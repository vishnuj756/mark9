import Container from 'react-bootstrap/Container';
import { Nav, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header2() {
    return (
        <>
            <Navbar bg="warning" className='d-none d-lg-block'>
                <Container >

                    <Nav className="me-auto fs-5">
                        <NavLink to="/" className="mx-4 text-decoration-none text-white">Home</NavLink>
                        <NavLink to="/products" className="mx-4 text-decoration-none text-white">Shop</NavLink>
                        <NavLink to="/about" className="mx-4 text-decoration-none text-white">About us</NavLink>
                        <NavLink to="/contact" className="text-decoration-none text-white" >Contact</NavLink>
                    </Nav>
                    <div>
                        <Button className='rounded-0 bg-dark border-0'>Become Seller</Button>
                    </div>
                </Container>
            </Navbar>



        </>
    );
}

export default Header2;