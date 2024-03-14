import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
export default function Discount() {
    return (
        <div className='bg-img d-flex justify-content-center p-5 flex-column '>


            <div className=' animation'>
                <h2 className='text-center '>Get 20% Off Discount Coupon
                </h2>
                <h4 className='text-center'>by Subscribe our Newsletter</h4>

            </div>
          
                <div>
                    <Form className="d-flex justify-content-center pt-3">
                        <div className='w-50'> <Form.Control
                            type="search"
                            placeholder="Email id"
                            className=" border-2 rounded-0 w-100 border-white "

                        />
                        </div>

                        <Button className='btn btn-warning border rounded-0 '>Get the Coupon</Button>
                    </Form>
                </div>
         

        </div>

    )
}
