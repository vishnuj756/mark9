// Cart.js

import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removecart } from './Store/Slice/Slice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removecart(id));
  }

  // Create an object to store item counts
  const itemCounts = cartItems.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  // Create a Set to keep track of unique item IDs
  const uniqueItemIds = new Set(cartItems.map(item => item.id));

  return (
    <Container className='my-3'>

      <Row className='d-flex align-items-center border border-2 p-3 shadow-lg  bg-body-tertiary'>
        {
          [...uniqueItemIds].map((itemId) => {
            const item = cartItems.find(item => item.id === itemId);
            return (<>
              <Col lg={7}><img src={item.image} alt="" style={{ height: "50px" }} />
                <p className='d-inline-flex ms-2 mb-0'>{item.title}</p></Col>
              <Col lg={2}><p className='mb-0'>{item.price}</p></Col>
              <Col lg={1}><p className='mb-0'>{itemCounts[item.id]}</p></Col>
              <Col lg={2} className='text-right'>                          <Button
                variant="danger"
                onClick={() => handleRemove(item.id)}
                className='d-flex'
              >
                Remove
              </Button>
              </Col>
            </>)
          })

        }
      </Row>

    </Container>
    
  );
}

export default Cart;
