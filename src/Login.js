import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
export default function Login(props) {
  const login=useRef(null)
  function displaynone(){
    login.current.classList="b-none"
  }
    const [dbpass,setpass]=useState();
    useEffect(()=>{
axios.get("http://localhost:8080/demo").then((res)=>{
    setpass(res.data)
})
    },[])
    const [log, logdata] = useState({
        user: "",
        pass: "",

    })
    const [validate, setValidationMessage] = useState({
        user: "",
        pass: ""
    })
    function validation() {
        const alert = {}
        if (log.user.trim() === "") {
            alert.user = "Error user name require"
        }
        else if (log.user.length < 8) {
            alert.user = "Username should be at least 8 characters";
        }

        // Password validation
        if (log.pass.trim() === "") {
            alert.pass = "Error: Password is required";
        }
        else if (!log.pass.match(/1234/)) {
            alert.pass = "Password must contain the sequence '1234'";
        }


        setValidationMessage(alert)
    }
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault();
        const found = dbpass.find((v) => v.user === log.user && v.pass === log.pass);
        if (found) {

            alert("data match");
            navigate('/');
        } else {
            alert("Please Sign Up first");
            navigate('/Sigup');
        }

    }
    return (
        <div className='d-block' ref={login}>
 <Form className='mt-3 login_form d-block' onSubmit={handleSubmit}>
          <div className=''>
            <FloatingLabel
              controlId="floatingInput"
              label="User"
              className="text-white"

            >
              <Form.Control type="text" placeholder="Name" className='rounded-0 ' onChange={(e) => { logdata({ ...log, user: e.target.value }) }} />
            </FloatingLabel>
            <span className='text-danger'>{validate.user}</span>
          </div>
          <div className='mt-3'>
            <FloatingLabel
              controlId="floatinguser"
              label="Password"
              className="text-white"
            >
              <Form.Control type="Password" placeholder="Name" className='rounded-0 ' onChange={(e) => { logdata({ ...log, pass: e.target.value }) }} />
            </FloatingLabel>
            <span className='text-danger'>{validate.pass}</span>
          </div>


          <div className='mt-3 d-flex justify-content-end'>
            <p className='text-white m-0' style={{ fontSize: '12px' }}>Forget Password</p>
            <span className='text-white mx-2' style={{ fontSize: '12px' }}>||</span>
          <span onClick={()=>{Ragister.current.classList="d-block",loginone.current.classList="d-none"}} className='text-white'>Ragister</span>

          </div>
          <div className='text-center mt-3'>
            <Button variant='warning' className='w-25 rounded-0' onClick={() => { validation() }}> Login</Button>
          </div>
        </Form>
        </div>
    )
}
