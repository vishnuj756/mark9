import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import axios from "axios"

export default function Contact() {
    const [fdata, setFdata] = useState({
        fname: "",
        email: "",
        message: ""
    });

    const [validationMessage, setValidationMessage] = useState({
        fname: "",
        email: "",
        message: ""
    });

    function validation() {
        let alphabet = /^[A-Za-z .]+$/;
        const newMessage = {};

        // Clear previous validation messages
        setValidationMessage({ fname: "", email: "", message: "" });

        if (fdata.fname.trim() === "") {
            newMessage.fname = "Error: Full name is required";
        } else if (!alphabet.test(fdata.fname.trim())) {
            newMessage.fname = "Error: Only alphabets and spaces are allowed";
        }

        if (fdata.email.trim() === "") {
            newMessage.email = "Error: Email is required";
        }

        setValidationMessage(newMessage);
    }


    function handleSubmit(e) {
        e.preventDefault();
        const postData = {
            data: [
                {
                    Name: fdata.fname,
                    Email: fdata.email,
                    message: fdata.message
                }
            ]
        };
        axios
            .post('https://sheetdb.io/api/v1/s5q9fm9ewtcse', postData)
            .then((response) => {
                console.log('Data submitted successfully:', response.data);

            })
            .catch((error) => {
                console.error('Error submitting data to SheetDB:', error);
            });
    }
    return (
        <div>
            <Container>
                <Row lg={2} md={1} className='mb-2'>
                    <Col className='p-3'>
                        <h2 className=" bold ">Contact Information</h2>
                        <p className="fs-6 text-grey">Fill the form below or write us. We will help you as soon as possible.</p>
                        <Row lg={2} >
                            <Col className='mb-2'>
                                <div className="p-4 d-flex justify-content-center align-items-center flex-column bg-danger bg-gradient">
                                    <LocalPhoneIcon color='warning' fontSize='large' />
                                    <h5>Phone</h5>
                                    <p>+91 8871942880</p>
                                    <p>+91 8871942880</p>
                                </div>
                            </Col>
                            <Col className='mb-2'>
                                <div className="bg-info bg-gradient p-4 d-flex justify-content-center align-items-center  flex-column">
                                    <EmailIcon color='warning' fontSize='large' />
                                    <h5>Email</h5>
                                    <p>Demoemail@gmail.com</p>
                                    <p>rafiqulislamsuvobd@gmail.com</p>
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div class="p-2" style={{ backgroundColor: "rgb(231 242 236)" }}>
                                    <span class="d-flex">
                                        <LocationOnIcon color='warning' fontSize='large' />  <h5>Address</h5>
                                    </span>
                                    <p>4517 Washington Ave. Manchester, Road 2342, Kentucky 39495</p>
                                    <iframe
                                        title="Google Maps"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7358.874937237295!2d75.8954065!3d22.749140800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708433462554!5m2!1sen!2sin"
                                        width="100%"
                                        height="250"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe> </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <div className="container-fluid border border-2 rounded-0 p-4">
                            <center className="line">
                                <h2 className="bold position-relative">Get In Touch</h2>
                            </center>
                            <form action="" className="form-control p-5 border-0" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-0"
                                        id="exampleFormControlInput1"
                                        placeholder="Full Name"
                                        onChange={(e) => { setFdata({ ...fdata, fname: e.target.value }) }}
                                    />
                                    <span className='text-danger'>{validationMessage.fname}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Email address*</label>
                                    <input type="email" className="form-control rounded-0" id="exampleFormControlInput2"
                                        placeholder="Email" onChange={(e) => { setFdata({ ...fdata, email: e.target.value }) }} />
                                    <span className='text-danger'>{validationMessage.email}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Subject*</label>
                                    <input type="text" className="form-control rounded-0" id="exampleFormControlInput3"
                                        placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea1"
                                        rows="3" onChange={(e) => { setFdata({ ...fdata, message: e.target.value }) }} ></textarea>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-warning w-100" onClick={() => { validation() }}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
