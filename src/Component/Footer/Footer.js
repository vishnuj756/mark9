import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../Footer/logo.svg'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export default function Footer() {
  return (
    <div>
      <Container className='py-3 mb-4 border-bottom border-3'>
        <center><img src={logo} alt="" />
        </center>
      </Container>
      <Container className='border-bottom'>
        <Row md={3} xs={1} lg={4}>
          <Col>
            <h1 className='mb-2 fs-5'>About Us</h1>
            <div className='pt-4 fs-6 text-black-50'> <p>We know there are a lot of threa developers our but we pride into a firm in the industry.
            </p></div>
          </Col>
          <Col>
            <h1 className='mb-2 fs-5'>Feature</h1>
            <div className='d-flex flex-column pt-4 text-decoration'> <NavLink to="/about">About Us</NavLink>
              <NavLink to="/term">Term Condition </NavLink>
              <NavLink to="/Home">Best Products</NavLink></div>
          </Col>
          <Col>
            <h1 className='mb-2 fs-5'>General Links</h1>
            <div className='d-flex flex-column pt-4 text-decoration'> <NavLink to="/about">Blog</NavLink>
              <NavLink to="/term">Tracking Order</NavLink>
              <NavLink to="/Home">Become Seller</NavLink></div>
          </Col>
          <Col>
            <h1 className='mb-2 fs-5 pb-4'>Helpful</h1>
            <div className='d-flex flex-column text-decoration'> <NavLink to="/about">Flash Sale</NavLink>
              <NavLink to="/term">FAQ </NavLink>
              <NavLink to="/Home">Support</NavLink></div>
          </Col>
        </Row>
      </Container>
      <Container>
      <div className='d-flex justify-content-between py-4'>
          <div className='d-flex gap-4'>
          <span><FacebookIcon/></span>
          <span><InstagramIcon/></span>
          <span><YouTubeIcon/></span>
          <span>&#169;2022QuomodosoftAll rights reserved</span>
          </div>
         
        </div>
      </Container>

    </div>
  )
}
