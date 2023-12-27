import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import "../styles/LoginPage.css";
import userService from "../services/userService";
import validation from "../services/validation";
import log from '../services/logService';

function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate=useNavigate();

  const handleSubmit = async (event) => {
    // event.preventDefault();
    try{
      // const response=await userService.validateUserCreateToken(loginData);
      // if(response.data.message==='success')
      // {
        validation.success("welcome");
        // const result=response.data;
        //  log(result)
        // if(result.data.roles[0].roleName==='USER')
        // {
          
          // sessionStorage.setItem("id",result.data.userId);
          // navigate('/');
        // }
        // else
        navigate('/admin')

      // }
      // else{
      //   validation.error("something went wrong");
      // }
    }
    catch(ex)
    {
      // validation.error("something went wrong");
    }
    
  };

  return (
    <Container className="login-container">
      <div className="login-box">
        <h2>Welcome To DigitalDukaan</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" size="lg" className="mt-3">
            Log In
          </Button>

          <div className="login-icons">
            <Link to="#" className="login-icon">
              <FaFacebook size={30} />
            </Link>
            <Link to="#" className="login-icon">
              <FaGoogle size={30} />
            </Link>
          </div>
        </Form>
        <p className="no-account">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </Container>
  );
}

export default LoginPage;
