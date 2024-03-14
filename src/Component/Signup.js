import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from 'react-bootstrap'
import axios from 'axios';
import { Form, FloatingLabel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './Store/Slice/User';

export default function Signup(props) {
  const { closepop} = props;

  

  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get("http://localhost:8080/demo").then((res)=>{
       setpass(res.data)
    })
})
       const [dbpass,setpass]=useState()
    const [log,sLog]=useState({
        user:"",
        pass:""
    })
    const navigate=useNavigate()

  const handle = (e) => {
  
    e.preventDefault();
   

    ;
    const found=dbpass.find((v)=>v.pass===log.pass && v.user===log.user)
    if(found){
 
        alert("data matched")
        closepop()
        dispatch(setUser(found));
       navigate('/')  
    }
    else{
      alert('wrong password try again')

    }
    
  };


  const [validate, setValidationMessage] = useState({
    user: "",
    pass: "",
  });
  

  function validation() {
    const alert = {};
    if (log.user.trim() === "") {
      alert.user = "Error: Username is required";
    } else if (log.user.length < 8) {
      alert.user = "Username should be at least 8 characters";
    }

    // Password validation
    if (log.pass.trim() === "") {
      alert.pass = "Error: Password is required";
    } else if (!log.pass.match(/1234/)) {
      alert.pass = "Password must contain the sequence '1234'";
    }

    setValidationMessage(alert);
  }

  const Ragister = useRef(null);
  const Login = useRef(null);


  // this code for Sign Up Validation
  const [logs, setLog] = useState({
    fullname: "",
    user: '',
    phone: "",
    email: '',
    pass: '',
    confirmPassword: '',
  });
  const [svalid, setvalid] = useState({
    fullname: "",
    user: '',
    phone: "",
    email: '',
    pass: '',
    confirmPassword: '',
  })
  function handleSubmit2(e) {
    e.preventDefault();
  
    if (Object.values(svalid).every((value) => value === "")) {
      axios.post('http://localhost:8080/demo', logs).then((res) => {
      const neww=()=>{
        Ragister.current.classList = "d-none"; Login.current.classList = "d-block" 
      }
      neww();
      })
        .catch((error) => {
          console.error('Error sending data to API:', error);
          alert('An error occurred during registration. Please try again.');
        });

    }
  }

  function validation2() {
    const bug = {};
    var correct_way = /^[A-Za-z .]+$/;
    if (logs.fullname.length < 8) {
      bug.fullname = "please enter full name";
    }
    if (!(logs.fullname.match(correct_way))) {
      bug.fullname = "Only alphabates are allowed";
    }
    if ((!(logs.user.match(correct_way))) && (logs.user < 8)) {
      bug.user = "please enter correct format";
    }
    // phone
    if (logs.phone.length === "") {
      bug.phone = "* mobile number can not be empty";
    }
    else if (isNaN(logs.phone)) {
      bug.phone = "* Enter Mobile number only"
    }
    else if (!(logs.phone.length === 10)) {
      bug.phone = "* mobile number must be 10 digit"
    }

    if (logs.email.trim() === '' || logs.email.indexOf('@') <= 0) {
      bug.email = 'Invalid email address';
    }
    // Confirm password validation
    if (logs.pass.trim() === "") {
      bug.pass = "password is not empty";
    }
    if (logs.confirmPassword !== logs.pass) {
      bug.confirmPassword = 'Passwords do not match';

    }
    setvalid(bug)

  }


  return (

    <Modal show={true} onHide={closepop} backdrop={'static'} keyboard={false} centered={true} className='rounded-0' data-bs-theme="dark" >

      <Modal.Header closeButton className='border-bottom-0 '>
        <Modal.Title id="contained-modal-title-vcenter border-bottom-0">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <center className='mb-2'><img src={require("../img/Brands/user.png")} alt="" /></center>
        <Form className='mt-3 login_form d-block' onSubmit={handle} ref={Login}>
                 
                 <div className='mb-3'>
                 
          
       
                   <FloatingLabel controlId="floatingInputuser" label="Username" className="text-white">
                     <Form.Control type="text" placeholder="username" onChange={(e) => sLog({ ...log, user: e.target.value })} className='rounded-0' />
                   </FloatingLabel>
                   <span className='text-danger'>{validate.user}</span>
                 </div>
              
               <div className='mb-3'>
                 <FloatingLabel controlId="floatingInputpass" label="Password" className="text-white">
                   <Form.Control type="password" placeholder="password" onChange={(e) => sLog({ ...log, pass: e.target.value })} className='rounded-0' />
                 </FloatingLabel>
                 <span className='text-danger'>{validate.pass}</span>
               </div>
              
             <div className=' text-end'>
               <p className='text-primary' variant="primary" type="submit" >
                 <span className='text-white'>Forgot Password:</span> <span onClick={() => { Ragister.current.classList = "d-block"; Login.current.classList = "d-none" }} style={{ fontSize: "13px" }}>sign in</span>
               </p>
             </div>
             <div className='text-center'>
               <Button variant="warning" type="submit" className='rounded-0 px-4 btn-12' onClick={validation}>
               Login
               </Button>
             </div>
           </Form>
        {
          <div className='d-none' ref={Ragister}>
            <Row>
              <Col>
                <Form className='mt-3 login_form' onSubmit={handleSubmit2}>
                  <Row>
                    <Col>  <div className='mb-3'>
                      <FloatingLabel controlId="floatingInputName" label="Fullname" className="text-white">
                        <Form.Control type="text" placeholder="fullname" onChange={(e) => setLog({ ...logs, fullname: e.target.value })} className='rounded-0' />
                      </FloatingLabel>
                      <span className='text-danger'>{svalid.fullname}</span>
                    </div>
                    </Col>
                    <Col>
                      <div className='mb-3'>
                        <FloatingLabel controlId="floatingInputuser" label="Username" className="text-white">
                          <Form.Control type="text" placeholder="username" onChange={(e) => setLog({ ...logs, user: e.target.value })} className='rounded-0' />
                        </FloatingLabel>
                        <span className='text-danger'>{svalid.user}</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col> <div className='mb-3'>
                      <FloatingLabel controlId="floatingInputEmail" label="Email" className="text-white">
                        <Form.Control type="Email" placeholder="Email" onChange={(e) => setLog({ ...logs, email: e.target.value })} className='rounded-0' />
                      </FloatingLabel>
                      <span className='text-danger'>{svalid.email}</span>
                    </div></Col>
                    <Col> <div className='mb-3'>
                      <FloatingLabel controlId="floatingInputPass" label="Phone Number" className="text-white">
                        <Form.Control type="number" placeholder="Phone Number" onChange={(e) => setLog({ ...logs, phone: e.target.value })} className='rounded-0' />
                      </FloatingLabel>
                      <span className='text-danger'>{svalid.phone}</span>
                    </div></Col>
                  </Row>
                  <Row>
                    <Col> <div className='mb-3'>
                      <FloatingLabel controlId="floatingInputpass" label="Password" className="text-white">
                        <Form.Control type="password" placeholder="password" onChange={(e) => setLog({ ...logs, pass: e.target.value })} className='rounded-0' />
                      </FloatingLabel>
                      <span className='text-danger'>{svalid.pass}</span>
                    </div></Col>
                    <Col><div className='mb-3'>
                      <FloatingLabel controlId="floatingInputComp" label="Password" className="text-white">
                        <Form.Control type="password" placeholder="password" onChange={(e) => setLog({ ...logs, confirmPassword: e.target.value })} className='rounded-0' />
                      </FloatingLabel>
                      <span className='text-danger'>{svalid.confirmPassword}</span>
                    </div></Col>
                  </Row>
                  <div className=' text-end'>
                    <p className='text-primary' variant="primary" type="submit" onClick={() => { Ragister.current.classList = "d-none"; Login.current.classList = "d-block" }} style={{ fontSize: "13px" }}>
                      <span className='text-white'>Already have an acount :</span> Sign In
                    </p>
                  </div>
                  <div className='text-center'>
                    <Button variant="warning" type="submit" className='rounded-0 px-4 btn-12' onClick={() => { validation2() }}>
                      Sign Up
                    </Button>
                  </div>
                </Form>
              </Col>
            
            </Row>
          </div>
        }
      </Modal.Body>

    </Modal>

  );
}