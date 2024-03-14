import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Password() {
    const password = useSelector(state => state.user);
    const [log, setLog] = useState({
        oldpass: "",
        newpass: "",
        pass: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (log.oldpass === password.user.pass && log.newpass === log.pass) {
            const newpassword = log.newpass;
            const _id = password._id;

            axios.post(`http://localhost:8080/demo/${_id}`, { newpassword })
                .then(response => {
                    console.log("Password updated successfully:", response);
                    // You can add further handling if needed
                })
                .catch(error => {
                    console.error("Error updating password:", error);
                    // You can add error handling if needed
                });
        } else {
            console.log("Passwords do not match or old password is incorrect.");
            // You can display an error message to the user if needed
        }
    };

    return (
        <div>
            <Container className='mt-3 pe-5'>
                <Form onSubmit={handleSubmit}>
                    <Row lg={1}>
                        <Col>
                            <div className=''>
                                <label htmlFor="oldPassword" className="form-label">Old Password</label>
                                <Form.Control
                                    type="text"
                                    id="oldPassword"
                                    placeholder="Old Password"
                                    value={log.oldpass}
                                    onChange={(e) => setLog({ ...log, oldpass: e.target.value })}
                                    className='rounded-0'
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className=''>
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <Form.Control
                                    type="text"
                                    id="newPassword"
                                    placeholder="New Password"
                                    value={log.newpass}
                                    onChange={(e) => setLog({ ...log, newpass: e.target.value })}
                                    className='rounded-0'
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className=''>
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                <Form.Control
                                    type="text"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={log.pass}
                                    onChange={(e) => setLog({ ...log, pass: e.target.value })}
                                    className='rounded-0'
                                />
                            </div>
                        </Col>
                        <div className='mt-3'>
                            <Button type="submit" className='btn rounded-0'>Update</Button>
                        </div>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}
