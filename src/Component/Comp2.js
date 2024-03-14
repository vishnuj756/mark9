import React, { useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img1 from '../img/Imges/banner-1.png';
import img2 from '../img/Imges/banner-2.png';
import img3 from '../img/Imges/banner-3.png';
import axios from 'axios';
import StarIcon from '@mui/icons-material/Star';

import LocalMallIcon from '@mui/icons-material/LocalMall';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addtocart } from './Store/Slice/Slice';
import { product } from './Store/Slice/Slice2';
import Services from './Services';
import Slide1 from './Slide1';
export default function Comp2() {
  const [data, setdata] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=8").then((res) => {
     
      setdata(res.data)


    })
  }, [])
  const handle = (item) => {
    dispatch(addtocart(item));


  }
  const handle2 = (item) => {

    dispatch(product(item));

  }
  return (
    <div>
      <Container className="my-4">
        <Row lg={2} md={1} xs={1}>
          <Col className="mb-3">
            <NavLink>
              <img src={img1} alt="" className="img-fluid h-100" />
            </NavLink>
          </Col>
          <Col>
            <Row lg={1} md={2} xs={2} >
              <Col className="mb-3 d-flex justify-content-center" >
                <NavLink>
                  <img src={img2} alt="" className='img-fluid' />
                </NavLink>
              </Col>
              <Col className="mb-3 d-flex justify-content-center ">
                <NavLink>
                  <img src={img3} alt="" className='img-fluid' />
                </NavLink>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container>
          <h1 className='py-3'>Top Seller</h1>
          <Row xs={1} md={2} lg="4"  >
            {
              data.map((item) => {
                return (<Col className='mb-4' key={item.id}>
                  <Card className='rounded-0 shadow-lg  bg-body-tertiary'>
                    <Card.Img variant="top" src={item.image} style={{ aspectRatio: "1" }} className='p-5' />
                    <Card.Body className='overflow-hidden ' >

                      <Card.Title className='overflow-hidden mb-0' style={{
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineClamp: "2"
                      }}>{item.title}</Card.Title>
                      <Card.Text className='' style={{
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineClamp: "2"
                      }}>

                        {item.description}
                      </Card.Text>
                      <Card.Title>{
                        (() => {
                          const stars = [];
                          for (let i = 0; i < item.rating.rate; i++) {
                            stars.push(<StarIcon key={i} className="text-warning" />);
                          }
                          return stars;
                        })()
                      }</Card.Title>
                      <Card.Title className='cardb position-relative'>
                        <span className='d-flex gap-2 '>
                          <h4 className='text-warning'>${item.price}</h4>
                        </span>
                        <div className=' ButtonAnim'>
                          <Button size='sm' variant="warning" onClick={() => handle(item)} className=' w-100  py-2 px-1' style={{ fontSize: "12px" }}><LocalMallIcon /> Add to cart</Button>
                          <NavLink to="/product" className="text-decoration-none text-black  w-100"><Button size='sm' variant="danger" onClick={() => handle2(item)} className='w-100   py-2 px-1' style={{ fontSize: "12px" }}><LocalMallIcon /> Buy Now </Button></NavLink>

                        </div>
                      </Card.Title>

                    </Card.Body>
                  </Card>
                </Col>)
              })
            }
          </Row>
        </Container>
        <Slide1 />
        <Services />
      </Container>


    </div>

  );
}
