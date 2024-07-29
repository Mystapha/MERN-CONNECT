
import React from 'react';
import Button from 'react-bootstrap/Button';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

function Register() {

  const onFinish=(values) => {
    console.log('Received values from form: ', values);
  }
  return (
    <div className="authentication">
      <div className="authentication-form card p-2">
             <h1 className="card-title">NICE TO MEET U</h1>
             <Form layout="vertical" onFinish={onFinish}>
      <Form.Group className="mt-2">
        <FormLabel className="label" style={{marginTop:"10px"}}>Name :</FormLabel>
        <Form.Control type="text" placeholder="Name"/>
        <FormLabel  className="label" style={{marginTop:"10px"}}>Email:</FormLabel>
        <Form.Control type="email" placeholder="Email"/>
        <FormLabel  className="label" style={{marginTop:"10px"}}>Password:</FormLabel>
        <Form.Control type="Password" placeholder="Password"/>
      </Form.Group>
        
       <Button className="primary-btn my-3" htmlType="submit">REGISTER</Button>
      <Link className="anchor mt-3" to="/login">Click here to login</Link>
      </Form>
      </div>
    </div>
  )
}

export default Register
