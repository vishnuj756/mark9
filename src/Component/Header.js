import React from 'react';
import { Navbar, Container, Form, Nav, Dropdown, Button, Badge, Offcanvas } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from '../img/logo.svg';
import Header2 from './Header2';
import Signup from './Signup';
import { useState } from 'react';

function Header(props) {
    const user = useSelector(state => state.user.user);
    const data = useSelector(state => state.cart);

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [LoginShow, setModalShow] = useState(false);

    const modalShow = () => {
        setModalShow(true);
    }

    const modalClose = () => {
        setModalShow(false);
    }


    const userName = user ? user.user : "Login";

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary p-4">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} className="d-lg-none" />
                    <Navbar.Brand href="#"><img src={logo} alt="" className='w-100' /></Navbar.Brand>

                    <Navbar.Collapse id="navbarScroll">
                        <Offcanvas show={show} onHide={handleClose} responsive="lg" className="p-2 pt-5 p-lg-0 flex-column-reverse flex-lg-row d-flex justify-content-end align-items-center canwidth ">
                            <Offcanvas.Header closeButton className='position-absolute top-0 end-0'></Offcanvas.Header>

                            <Nav className="my-2 my-lg-0 mx-auto order-2">
                                <div className='border border-warning border-2 mx-auto d-flex align-item-center p-2 '>
                                    <Form className="d-flex ">
                                        <Form.Control
                                            type="search"
                                            placeholder="Search"
                                            className="me-2 border-2 rounded-0 w-100 border-white"
                                            aria-label="Search"
                                        />
                                        <Dropdown className='border-start-3 border-2 bg-transparent text-dark'>
                                            <Dropdown.Toggle variant='white' id="dropdown-basic" className='border-0'>
                                                All Categories
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='z-index-1'>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3"></Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button className='btn btn-warning border rounded-0'>Search</Button>
                                    </Form>
                                </div>
                            </Nav>

                            <div className='d-flex flex-lg-row icon-w justify-content-end text-warning order-3 align-items-center'>
                                <div className='mx-2 '><FavoriteBorderIcon fontSize='large' /></div>
                                <div className='mx-2 position-relative'>
                                    <NavLink to='./cart'>
                                        <LocalMallIcon fontSize='large' className='text-warning' />
                                        <Badge className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger' bg="secondary">{data.length}</Badge>
                                    </NavLink>
                                </div>
                                <div className='ms-2'>
                                    <Dropdown className='border-start-3 border-2 bg-transparent'>
                                        <Dropdown.Toggle variant='white' id="dropdown-basic" className='border-0 text-warning d-flex'>
                                            <div className='d-flex'><PersonOutlineIcon fontSize='large' />
                                                <span>{userName}</span>
                                            </div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='rounded-0 position-abosulte' style={{ left: "0" }}>
                                       { user ? (
                                        <Dropdown.Item>
                                                    <NavLink to="/profile" className="text-decoration-none text-dark">Profile</NavLink>
                                                </Dropdown.Item>
                                            ) : (
                                                <Dropdown.Item href="#/action-1" onClick={modalShow}>Login</Dropdown.Item>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>

                            <Navbar bg="warning" data-bs-theme="text-dark" className='d-md-block d-lg-none w-100 order-1 m-2 flex-column align-items-baseline'>
                                <Nav className=" fs-5 flex-column  ">
                                    <NavLink to="/" className="mx-3 mx-sm-1 text-decoration-none text-dark my-2">Home</NavLink>
                                    <NavLink to="/shop" className="mx-3 text-decoration-none text-dark my-2">Shop</NavLink>
                                    <NavLink to="/about" className="mx-3 text-decoration-none text-dark my-2">About us</NavLink>
                                    <NavLink to="/contact" className="mx-3 text-decoration-none my-2 text-dark">Contact</NavLink>
                                </Nav>
                                <div className='ms-2'>
                                    <Button className='rounded-0 bg-dark border-0 ms-3'>Become Seller</Button>
                                </div>
                            </Navbar>
                        </Offcanvas>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Header2 />
            {LoginShow && <Signup closepop={modalClose} />}
        </>
    );
}

export default Header;
