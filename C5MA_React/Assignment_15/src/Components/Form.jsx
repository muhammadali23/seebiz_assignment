import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "../Style/Form.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function FormComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://669287d2346eeafcf46d3929.mockapi.io/crud", {
        u_name: name,
        u_email: email,
        u_age: age,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
      <div className="form-container">
        <h1>User Info</h1>
        <Form className="form_class" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter User email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>User Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Age"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Link to="/" className="read_btn">
        <Button variant="success">Read User</Button>
      </Link>
    </>
  );
}

export default FormComponent;
