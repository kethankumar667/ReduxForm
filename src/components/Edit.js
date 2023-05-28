import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
const Edit = () => {
  const [FisrtName, setFisrtName] = useState("");
  const [LastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const { id } = useParams();
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const currentuser = users.find((user) => user.id === parseInt(id));

  useEffect(() => {
    if (currentuser) {
      setFisrtName(currentuser.FisrtName);
      setLastName(currentuser.LastName);
      setemail(currentuser.email);
      setnumber(currentuser.number);
    }
  }, [currentuser]);
  const submitHandler = (e) => {
    e.preventDefault();
    const checkEmail = users.find(
      (user) => user.id !== parseInt(id) && user.email === email && email
    );
    const checkNumber = users.find(
      (user) => user.id !== parseInt(id) && user.number === parseInt(number)
    );
    if (!email || !number || !FisrtName) {
      return toast.warning("Please Fill all the Fields");
    }
    if (checkEmail) {
      return toast.error("This email already Exists!");
    }
    if (checkNumber) {
      return toast.error("This Number already Exists!");
    }
    const data = {
      id: parseInt(id),
      FisrtName,
      LastName,
      email,
      number,
    };
    dispatch({ type: "UPDATE_USER", payload: data });
    toast.success("User Updated Successfully***");
    history("/");
  };
  return (
    <div className="container">
      {currentuser ? (
        <div className="row">
          <h1 className="display-3 text-center my-4"> User {id}</h1>
          <div className="col-md-6  mx-auto">
            <Card className=" bg-dark text-primary">
              <Card.Body>
                <Card.Title className="text-center display-4">
                  Edit Form
                </Card.Title>
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
                          Update user
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
      ) : (
        <h1 className="display-3 text-center my-4">
          User {id} Details Not Found !!!!
        </h1>
      )}
    </div>
  );
};

export default Edit;
