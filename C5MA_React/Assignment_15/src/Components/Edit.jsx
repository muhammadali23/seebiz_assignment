import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setAge(localStorage.getItem("age"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://669287d2346eeafcf46d3929.mockapi.io/crud/${id}`, {
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
        <Form className="form_class" onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter User name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter User email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>User Age</Form.Label>
            <Form.Control
              type="number"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              placeholder="Enter Age"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
      <Link to="/" className="read_btn">
        <Button variant="success">Read User</Button>
      </Link>
    </>
  );
};

export default Edit;
