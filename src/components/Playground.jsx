import React, { useState, useEffect } from "react";
import axios from "axios";
function Playground() {
  //grabs the current users wallet from mongoDB
  const [wallet, setWallet] = useState(0);
  //grabs only the users name from the cookies
  const [user, setUser] = useState(null);
  //grabs user object
  const [userObject, setUserObject] = useState({});
  //create game buttons
  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user", {
        withCredentials: true,
      });
      // Checks if the response contains username field
      if (response.data && response.data.username) {
        setUser(response.data);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  //grabs the user object
  const fetchUserDetail = async () => {
    if (user) {
      try {
        const response = await axios.get(
          `http://localhost:5000/getUser/${user.username}`,
          {
            withCredentials: true,
          }
        );
        setWallet(response.data.wallet);
        setUserObject(response.data);
      } catch (err) {
        console.error(err);
      }
    } else {
      setUserObject({});
      setWallet(0);
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUserDetail();
    }
  }, [user]);

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/logout", {}, { withCredentials: true })
      .then(() => {
        console.log("Logout pressed.");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred during logout."); // alert user on error
      });
  };
  return (
    <div>
      <h1>Username: {user ? user.username : ""}</h1>
      <h1>Wallet: {wallet}</h1>
      <div>
        <button onClick={handleLogout}>Click to logout</button>
      </div>
    </div>
  );
}

export default Playground;
