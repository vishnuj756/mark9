import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet} from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockIcon from '@mui/icons-material/Lock';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Profile() {
    return (
        <div>
            <Container className='py-5'>
                <Row>
                    <Col lg={3}>
                        <div className='p-4 border border-3 my-2'>
                            <div className='d-flex flex-column sidebar '>
                                <div className='mt-4'>
                                    <Link to="pdatails">  <PersonIcon fontSize='large' /> <span> Personal details</span></Link>
                                </div>
                                <div className='mt-4'>
                                    <Link to="/profile/wishlist"> <ShoppingCartIcon fontSize='large' /><span> Order</span></Link>
                                </div>
                                <div className='mt-4'>
                                    <Link to="/profile/change"> <LockIcon fontSize='large' /><span> Change Password</span></Link>
                                </div>
                               
                                <div className='mt-4'>
                                    <Link to="/profile/logout"> <LogoutIcon fontSize='large' /><span> Logout</span></Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div>
                           <Outlet/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
