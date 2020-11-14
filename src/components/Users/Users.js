import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./Users.css";
import Avatar from "@material-ui/core/Avatar";
import Spinner from "react-bootstrap/Spinner";
import slika1 from "../../assets/user_photos/user_photos/slika1.png";
import slika2 from "../../assets/user_photos/user_photos/slika2.png";
import slika3 from "../../assets/user_photos/user_photos/slika3.png";
import slika4 from "../../assets/user_photos/user_photos/slika4.png";
import slika5 from "../../assets/user_photos/user_photos/slika5.png";
import slika6 from "../../assets/user_photos/user_photos/slika6.png";
import slika7 from "../../assets/user_photos/user_photos/slika7.png";
import slika8 from "../../assets/user_photos/user_photos/slika8.png";
import slika9 from "../../assets/user_photos/user_photos/slika9.png";
import slika10 from "../../assets/user_photos/user_photos/slika10.png";

const images = [
  slika1,
  slika2,
  slika3,
  slika4,
  slika5,
  slika6,
  slika7,
  slika8,
  slika9,
  slika10,
];

function Users() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const getUsers = () => {
    Axios.get("http://localhost:3001/users").then((res) => {
      let items = JSON.parse(res.data);
      let users = items;
      setUsers(users);
      setLoad(true);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (load) {
    return (
      <div className="container">
        <div className="users">
          <div className="row col-sm-12">
            <h1 id="all-posts">Users/</h1>
          </div>
          <div className="row">
            <div className="col-sm-12" style={{ overflowX: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Adress</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company name</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr className="col-sm-12" id="user" key={user.id}>
                      <th scope="row">{user.id}.</th>
                      <td>
                        {" "}
                        <Avatar alt={user.name} src={images[index]} />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.address.street}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        Loading
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
        <Spinner animation="grow" />
      </div>
    );
  }
}

export default Users;
