import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
const Add = () => {
  const [FisrtName, setFisrtName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const checkEmail = users.find((user) => user.email === email && email);
    const checkNumber = users.find((user) => user.number === parseInt(number));
    if (!email || !number || !FisrtName || !LastName) {
      return toast.error("Please Fill all the Fields");
    }
    if (checkEmail) {
      return toast.error("This email already Exists!");
    }
    if (checkNumber) {
      return toast.error("This Number already Exists!");
    }
    const data = {
      id: users[users.length - 1].id + 1,
      FisrtName,
      LastName,
      email,
      number,
    };
    dispatch({ type: "ADD_USER", payload: data });
    toast.success("User Added Successfully***");
    history("/");
  };
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center my-4 text-primary">
          User Registration Form
        </h1>
        <div className="col-md-6  mx-auto">
          <Card className=" bg-dark text-primary">
            <Card.Body>
              <Form onSubmit={submitHandler}>
                <div className="container">
                  <div className="row mt-4">
                    <div className="col-lg-6 col-md-4 h5 text-secondary">
                      <Form.Group className="mb-3" controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          autoComplete="off"
                          value={FisrtName}
                          onChange={(e) => {
                            setFisrtName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-lg-6 col-md-4 h5 text-secondary">
                      <Form.Group className="mb-3" controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          autoComplete="off"
                          value={LastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="mail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => {
                              setemail(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-4 h5 text-secondary">
                        <Form.Group className="mb-3" controlId="number">
                          <Form.Label>Mobile Number</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Enter Number"
                            autoComplete="off"
                            value={number}
                            onChange={(e) => {
                              setnumber(e.target.value);
                            }}
                          />
                        </Form.Group>
                      </div>
                    </div>

                    <Stack direction="horizontal" gap={2}>
                      <Button
                        type="submit"
                        variant="primary"
                        className=" btn btn-block btn-success d-flex"
                      >
                        Add user
                      </Button>
                      <Link
                        to="/"
                        variant="primary"
                        className=" btn btn-block btn-danger d-flex"
                      >
                        cancel
                      </Link>
                    </Stack>
                  </div>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Add;
