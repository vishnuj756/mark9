import React, { useState } from 'react'
import { Col, Container, Row, Badge, Button, Form, FloatingLabel } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';


export default function Checkout() {
  const Singlecart = useSelector(state => state.buynow)
  const [key, setkey] = useState();
  const handles = (eventKey) => {
    setkey(key === eventKey ? null : eventKey)
    
  }
  

  return (
    <div>
      <Container className='my-3'>
        <Row lg={2} xs={1}>
          <Col  lg={8}>
          <div className='shadow-lg p-2'>
            <Row lg={1} sm={1} >
              <Col>

              <Accordion.Header className='mb-1' style={{height:"50px"}}><div className='px-4 p-2 fw-bold fs-5 text-white'><Badge bg="secondary rounded-0 me-3">1</Badge>User Name
              
          </div></Accordion.Header>


              </Col>
              <Col>
                <div>
                  <Accordion activeKey={key} flush defaultActiveKey="0">
                    <Accordion.Item eventKey="0" >
                      <Accordion.Header onClick={() => handles("0")} className='mb-1'> <span className='fw-bold fs-5 text-white'><Badge bg="secondary rounded-0 me-2">2</Badge> Delivery Address</span></Accordion.Header>
                      <Accordion.Body>
                        <div>
                          <Form>

                            <Row lg={2} md={1} sm={1} className='mb-3'>
                              <Col>
                                <FloatingLabel
                                  controlId="floatingInput"
                                  label="Name"
                                  className="mb-3"
                                >
                                  <Form.Control type="text" placeholder="Name" className='rounded-0' />
                                </FloatingLabel>

                              </Col>
                              <Col>   <FloatingLabel controlId="floatingPassword" label="10 digit Phone Number">
                                <Form.Control type="number" className='rounded-0' placeholder="10 digit phone number" />
                              </FloatingLabel></Col>
                            </Row>
                            <Row lg={2} md={1} sm={1} className='mb-3'>
                              <Col> <FloatingLabel
                                controlId="floatingInput"
                                label="Pincode"
                                className="mb-3"
                              >
                                <Form.Control type="number" className='rounded-0' placeholder='' />
                              </FloatingLabel></Col>
                              <Col> <FloatingLabel controlId="floatingPassword" label="Locality">
                                <Form.Control type="text" placeholder="locality" className='rounded-0' />
                              </FloatingLabel></Col>
                            </Row>
                            <Row lg={1} md={1} sm={1} className='mb-3'>
                              <Col><FloatingLabel controlId="floatingTextarea2" label="Address (area and street)">
                                <Form.Control
                                  as="textarea"
                                  placeholder="Leave a comment here"
                                  style={{ height: '100px' }}
                                  className='rounded-0'
                                />
                              </FloatingLabel></Col>
                            </Row>
                            <Row lg={2} md={1} sm={1} className='mb-3'>
                              <Col><FloatingLabel
                                controlId="floatingInput"
                                label="City"
                                className="mb-3"
                              >
                                <Form.Control type="number" className='rounded-0' placeholder='' />
                              </FloatingLabel>
                              </Col>
                              <Col> <FloatingLabel controlId="floatingSelect" label="State">
                                <Form.Select aria-label="Floating label select example" className='rounded-0' placeholder="">
                                  <option>--select-state--</option>
                                  <option value="1">Andhra Pradesh</option>
                                  <option value="2">Arunachal Pradesh</option>
                                  <option value="3">Assam</option>
                                  <option value="4">Bihar</option>
                                  <option value="5">Chhattisgarh</option>
                                  <option value="6">Goa</option>
                                  <option value="7">Gujarat	</option>
                                  <option value="8">Haryana</option>
                                  <option value="9">Karnataka</option>
                                  <option value="10">Kerala</option>
                                  <option value="11">Madhya Pradesh</option>
                                  <option value="12">Maharashtra</option>
                                  <option value="13">Punjab</option>
                                  <option value="14">Rajasthan</option>
                                  <option value="15">Sikkim</option>
                                  <option value="16">	Tamil Nadu</option>
                                  <option value="17">Uttar Pradesh</option>

                                </Form.Select>
                              </FloatingLabel></Col>
                              <Row lg={1} md={1} sm={1} className='mb-3'>
                                <Col>
                                  <Button onClick={() => { handles('1') }} className=' btn p-2 w-50 rounded-0 border border-0' style={{background:"#FB641B"}}>Delivered Here</Button>
                                </Col>
                              </Row>

                            </Row>


                          </Form>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header className='' > <span className='fw-bold fs-5 text-white'><Badge bg="secondary rounded-0 me-2">3</Badge>Payment Option</span></Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit consequatur labore inventore at iste totam facere harum numquam, eum aperiam dolor a rem magnam obcaecati enim, aut distinctio exercitationem. Culpa?
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Col>

            </Row>
            </div>
          </Col>
          <Col  lg={4}>
            <div className=' p-3 ms-3 shadow-lg'>

              {


                Singlecart.map((item, key) => {
                  
                  return (<>
                    <div key={key.id}>
                      <div className='d-flex justify-content-between p-2'><h5>Product Details </h5><h5>X{Singlecart.length}</h5></div>
                      <div className='d-flex justify-content-between p-2'><p>Price</p> <p>{item.price}</p></div>
                   
                      <div className='d-flex justify-content-between p-2'><p>Discount</p><p>00.0</p></div>
                      <div className='d-flex justify-content-between p-2'> <p>Delivery charges </p><p className='text-success'><span className='text-decoration-line-through text-black-50'>40.00</span>Free</p></div>

                  <div className='d-flex justify-content-between p-2 fw-bold fs-5'><p>Total Amount</p> <p>{item.price}</p></div>
                    </div>
                  </>)
                })

              }
              <img src={require("../img/Imges/banner-2.png")} alt="" className=" mt-3 img-fluid" />
            </div>

          </Col>
        </Row>
      </Container >
    </div >
  )
}
