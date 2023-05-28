import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Table } from "react-bootstrap";
const Home = () => {
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteuser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
    toast.success("User deleted Successfully!");
  };
  return (
    <div className="container">
      <div className="row">
        <div>
          <h1 className="display-3 text-center my-4 text-primary">
            <span className="display-3 text-center my-4 text-danger">CRUD</span> 
            operation with Redux
          </h1>
          <div className="row mt-5 mb-5 col-lg-12 col-md-10">
            <Table striped bordered hover>
              <thead className="text-white bg-dark text-center">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">FirstName</th>
                  <th scope="col">LastName</th>
                  <th scope="col">email</th>
                  <th scope="col">Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {users.map((contact, id) => (
                  <tr key={id}>
                    <th scope="row">{id + 1}</th>

                    <td>{contact.FisrtName}</td>
                    <td>{contact.LastName}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-small btn-primary"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        className="btn btn-small btn-danger mx-2"
                        onClick={() => {
                          deleteuser(contact.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="col-md-8 mx-auto my-5 d-flex ">
              <Link
                to="/add"
                className="btn btn-outline-dark justify-content-space-around ml-5"
              >
                Add User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
