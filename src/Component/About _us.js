import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import Services from './Services';

function AboutUs() {
    return (
        <>
            <Container className="mt-3">
                <center>
                    <h2>About Us</h2>
                </center>
                
                   <Row lg={2} md={1} xs={1}>
                   <Col className='p-4'>
                    <img src={require('../img/Imges/about-banner.png')} alt="" class=" img-fluid" />
                   </Col>
                    <Col>
                    <div className="p-5">
                            <h4>What is e-commerce business?</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries but also the on leap into electronic typesetting.
                            </p>
                            <ul>
                                <li>slim body with metal cover</li>
                                <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                                <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                                <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                            </ul>
                            <Button variant="warning">Contact Us</Button>
                        </div>
                    </Col>
                   </Row>
            </Container>

            <Container className="my-4">
               <Services/>
            </Container>

            <Container className="mt-3">
                <center>
                    <h2>My Latest News</h2>
                </center>
            <Row>
                <Col>
                <div className="card mb-3">
                            <img src={require('../img/Imges/blog-img-2.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, dicta!</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                </Col>
                <Col>
                <div className="card mb-3">
                            <img src={require('../img/Imges/blog-img-1.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, explicabo?</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional
                                    content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                </Col>
            </Row>
            </Container>
        </>
    );
}

export default AboutUs;
