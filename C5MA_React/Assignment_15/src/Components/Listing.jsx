import axios from "axios";
import "../Style/Listing.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Listing = () => {
  const [apiData, setApiData] = useState([]);
  const getData = () => {
    axios
      .get("https://669287d2346eeafcf46d3929.mockapi.io/crud")
      .then((response) => {
        setApiData(response.data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const setItemsToStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://669287d2346eeafcf46d3929.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div className="header">
      <div className="sub-header">
        <h1>User Listing</h1>
        <Link to="/create">
          <Button variant="success">Create User</Button>
        </Link>
      </div>
      <div className="table_sec">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>User email</th>
              <th>Age</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => {
              return (
                <>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.u_name}</td>
                    <td>{item.u_email}</td>
                    <td>{item.u_age}</td>
                    <td>
                      <Link to="/edit">
                        <Button
                          variant="primary"
                          onClick={() =>
                            setItemsToStorage(
                              item.id,
                              item.u_name,
                              item.u_age,
                              item.u_email
                            )
                          }
                        >
                          Edit
                        </Button>
                      </Link>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Listing;
