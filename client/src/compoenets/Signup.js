import React, { useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import golfimage from '../images/golfimage.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Signup.css"

import { Form, Col, Row, Container } from 'react-bootstrap';

// 컨테이너에 백그란운드 + 컨텐츠 두개 들어가고, 백그라운드를 4 컨테이너 6으로 놓고. 백그라운드에 꾸며주면 됨 
const Background = styled.div`
  background-color: #1B4607;
  display: flex;
  height: 100vh;
`;

const Background_Content = styled.div`
  position: relative;
  width: 80%;
  left: 150px;
  height: 75vh;
  top: 180px;
  font-family: "DM Sans";
  font-weight: 700;
  `

const Golf_image = styled.img`
position: relative;
  width: 80%;
  left: 120px;
  `

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [ispro, setIsPro] = useState(false);

    const Register = async (event) => {
        event.preventDefault();
        if (password === cpassword) {
            const userData = {
                username,
                email,
                password
            };

            try {
                let result;
                if (ispro) {
                    // result = await axios.get("http://localhost:3000/pro/signup");
                    result = await axios.post("http://localhost:3000/pro/signup", userData);
                } else {
                    result = await axios.post("http://localhost:3000/user/signup", userData);
                }

                console.log(result.data);
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("Password does not match");
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col xl={4}>
                    <Background>
                        <Background_Content>
                            <p style={{ 'color': '#A4A3A3', 'font-size': "20px", "fontWeight": "200" }}>welcome</p>
                            <h2 style={{ 'color': 'white', 'font-size': "40px" }}>Sign Up</h2>
                            <Golf_image src={golfimage} />
                        </Background_Content>
                    </Background>
                </Col>
                <Col xl={8} className="d-flex align-items-center justify-content-center">
                    <Form style={{ "width": "40%" }} >
                        <Form.Group className="d-flex justify-content-between mb-3">
                            <Form.Control
                                type="button"
                                value="User"
                                label="User"
                                name="isPro"
                                id="user"
                                checked={!ispro}
                                onChange={() => setIsPro(false)}
                                inline
                                className="mr-3"
                                style={{
                                    "backgroundColor": "#F3F3F3", "height": "60px", "width": "240px", "borderRadius": "18px"
                                }}
                            />
                            <Form.Control
                                type="button"
                                label="Pro"
                                value="Pro"
                                name="isPro"
                                id="pro"
                                checked={ispro}
                                onChange={() => setIsPro(true)}
                                inline
                                style={{ "backgroundColor": "#F3F3F3", "height": "60px", "width": "240px", "borderRadius": "18px" }}

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mb-3"
                                style={{ "backgroundColor": "#F3F3F3", "height": "50px", "borderRadius": "18px" }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mb-3"
                                style={{ "backgroundColor": "#F3F3F3", "height": "50px", "borderRadius": "18px" }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mb-3"
                                style={{ "backgroundColor": "#F3F3F3", "height": "50px", "borderRadius": "18px" }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={cpassword}
                                onChange={(e) => setCpassword(e.target.value)}
                                className="mb-3"
                                style={{ "backgroundColor": "#F3F3F3", "height": "50px", "borderRadius": "18px" }}
                            />
                        </Form.Group>
                        <div style={{ "display": "flex", justifyContent: "center" }}>
                            <Button variant="success" onClick={Register} style={{ "width": "80%", "height": "45px", "backgroundColor": "#1B4607" }}>
                                Sign Up
                            </Button>
                        </div>
                        <br />
                        Already have an account? <a href="/signin">Sign in</a>
                        <br />
                        Icons
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;

