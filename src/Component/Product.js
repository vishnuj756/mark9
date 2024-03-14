import React from 'react';
import { Col, Container, Row, Card, Button } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { reproduct } from './Store/Slice/Slice2';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Product() {
  const product = useSelector(state => state.buynow);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handle = (item) => {
    dispatch(reproduct(item))
    navigate('/')
    
  }
 
  return (
    <div>
      <Container className='py-5'>
        <Row lg={2} xs={1}>
          {
            product.map((item) => {
              return (< ><Col>
                <div className='d-flex justify-content-center p-5 border border-1'>
                  <img src={item.image} alt="Product" className='w-50' />
                </div>
              </Col>
                <Col>
                  <div>
                    <span>{item.category}</span>
                    <Card.Title className='pb-2'>{item.title}</Card.Title>
                    <Card.Title className='pb-2'>
                      <p className='mb-0'> {(() => {
                        const stars = [];
                        for (let i = 0; i < item.rating.rate; i++) {
                          stars.push(<StarIcon key={i} color='warning' />);
                        }
                        return stars;
                      })()}<span className='fs-6 text-black-50 my-4 mx-2'>({parseFloat(item.rating.rate)})</span></p>
                    </Card.Title>
                    <Card.Title className='pb-2 fs-1 text-warning'>${item.price}</Card.Title>
                    <Card.Text
                      className="pb-2 lh-lg"

                    >
                      {item.description}
                    </Card.Text>
                    <div className='d-flex'>
                      <NavLink to="/checkout" className="w-100 me-2"><Button
                        size="sm"
                        variant="success"
                        className="w-100 py-2 px-1 "
                        style={{ fontSize: '12px' }}
                      >
                        Checkout
                      </Button></NavLink>
                      <Button
                        size="sm"
                        variant="danger"
                        className="w-100 py-2 px-1"
                        style={{ fontSize: '12px' }}
                        onClick={() => handle(item.id)}

                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Col></>)
            })
          }
        </Row>
      </Container>
    </div>
  );
}
