import React from 'react';
import { Container, Form, Row, Col, FloatingLabel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Pdtails() {
    const Userdata=useSelector(state=>state.user)
   const{user}=Userdata;

  

  

    return (
        <div>
            <Container className='mt-3'>
                <h4>Profile Details</h4>
                <div>
                    <Row>
                        <Col>
                            <Form className='mt-3 login_form' >
                                <Row>
                                    <Col>
                                        <div className='mb-3'>
                                            <FloatingLabel controlId="floatingInputName" label="Fullname" className="text-white">
                                                <Form.Control type="text" placeholder="fullname" value={user.fullname} className='rounded-0 h- border border-light-subtle' readOnly style={{boxShadow:"none"}}/>
                                            </FloatingLabel>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-3'>
                                            <FloatingLabel controlId="floatingInputuser" label="Username" className="text-white">
                                                <Form.Control type="text" placeholder="username"  className='rounded-0 h-25 border border-light-subtle' value={user.user}  readOnly style={{boxShadow:"none"}} />
                                            </FloatingLabel>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className='mb-3'>
                                            <FloatingLabel controlId="floatingInputEmail" label="Email" className="text-white">
                                                <Form.Control type="email" placeholder="Email" className='rounded-0 h-25 border border-light-subtle'value={user.email} readOnly style={{boxShadow:"none"}}/>
                                            </FloatingLabel>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className='mb-3'>
                                            <FloatingLabel controlId="floatingInputPass" label="Phone Number" className="text-white">
                                                <Form.Control type="number" placeholder="Phone Number"  className='rounded-0 h-25 border border-light-subtle' value={user.phone} readOnly style={{boxShadow:"none"}} />
                                            </FloatingLabel>
                                        </div>
                                    </Col>
                                </Row>
                              
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
