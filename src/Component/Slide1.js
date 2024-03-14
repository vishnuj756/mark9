import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useDispatch } from 'react-redux';
import { addtocart } from './Store/Slice/Slice';
import product1 from '../img/Imges/product-img-1.jpg'
import product2 from '../img/Imges/product-img-2.jpg'
import product3 from '../img/Imges/product-img-3.jpg'

const data = [
  { id: 1, image: product1, stars: 4, description: 'Xoggle aute et pariatur adipisicing nostrud et excepteur Xoggle aute et pariatur adipisicing nostrud et excepteur', price: 18.7,title:"Xbox Gaming Controler" },
  { id: 2, image: product2, stars: 5, description: 'Xoggle aute et pariatur adipisicing nostrud et excepteur', price: 18.7,title:"Gaming Headphone" },
  { id: 3, image: product3, stars: 4, description: 'Xoggle aute et pariatur adipisicing nostrud et excepteur', price: 18.7,title:"Sony PlayStation 5" },
];

function Slide1() {
  const dispatch = useDispatch();

  const handle = (item) => {
    dispatch(addtocart(item));
  };

  return (
    <div>
      <Container>
        <h1 className='pb-3'>Game World</h1>
        <Row xs={1} md={2} lg={3}>
       
          {data.map((item) => (
            <Col className='mb-4' key={item.id}>
                  <Card className='rounded-0'>
                    <Card.Img variant="top" src={item.image} style={{ aspectRatio: "1" }} className='p-5' />
                    <Card.Body className='overflow-hidden ' style={{}}>

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
                                        for (let i = 0; i < 4; i++) {
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
                          <Button size='sm' variant="danger" onClick={() => handle(item)} className='w-100   py-2 px-1' style={{ fontSize: "12px" }}><LocalMallIcon /> Buy Now</Button>

                        </div>
                      </Card.Title>

                    </Card.Body>
                  </Card>
                </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Slide1;
