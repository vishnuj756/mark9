import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RefreshIcon from '@mui/icons-material/Refresh';
import PaymentIcon from '@mui/icons-material/Payment';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Brand1 from "../img/Brands/brand-1.png"
import Brand3 from "../img/Brands/brand-3.png"
import Brand4 from "../img/Brands/brand-5.png"
import Brand5 from "../img/Brands/brand-12.png"

export default function Services() {
  return (
    <div>
      <Container>
        <Row className='bg-light p-3 my-4' lg={4} md={1} sm={1}>
          <Col className='d-flex align-items-center pb-md-3'>
            <div>
              <ShoppingCartIcon sx={{ fontSize: 50 }} style={{ color: "#FFC107" }} />

            </div>
            <div className='ms-3'>
              <h5 className='fs-6 m-0 mb-1' >Free Shipping</h5>
              <p className='fs-6'>When ordering over $100</p>
            </div>
          </Col>
          <Col className='d-flex align-items-center pb-md-3'>
            <div>
              <RefreshIcon sx={{ fontSize: 50 }} style={{ color: "#FFC107" }} />

            </div>
            <div className='ms-3'>
              <h5 className='fs-6 m-0 mb-1'>Free Return</h5>
              <p className='fs-6'>Get Return within 30 days</p>
            </div>
          </Col>
          <Col className='d-flex align-items-center pb-md-3'>
            <div>
              <PaymentIcon style={{ color: "#FFC107" }} sx={{ fontSize: 50 }} />

            </div>
            <div className='ms-3'>
              <h5 className='fs-6 m-0 mb-1'>Secure Payment</h5>
              <p className='fs-6'>100% Secure Online Payment</p>
            </div>
          </Col>
          <Col className='d-flex align-items-center pb-md-3'>
            <div>
              <EmojiEventsIcon sx={{ fontSize: 50 }} style={{ color: "#FFC107" }} />
            </div>
            <div className='ms-3'>
              <h5 className='fs-6 m-0 mb-1'>Best Quality</h5>
              <p className='fs-6'>Original Product Guarenteed</p>
            </div>
          </Col>
        </Row>
        <h1 className='py-3'>Shop By Brands</h1>
        <Row className='pt-5 pb-4 brandrow'  >
  
          <Col className='border border-1 d-flex justify-content-center align-items-center' ><img src={Brand1} alt="" /></Col>
          <Col className='border border-1 d-flex justify-content-center align-items-center'><img src={Brand3} alt="" /></Col>
          <Col  className='border border-1 d-flex justify-content-center align-items-center'><img src={Brand4} alt="" /></Col>
          <Col  className='border border-1 d-flex justify-content-center align-items-center'><img src={Brand5} alt="" /></Col>
        </Row>
      </Container>
    </div>
  )
}
