import React, { useState } from "react";
import axios from "axios";
function Scratchers() {
  const [updateBalance, setUpdateBalance] = useState(420);
  const handleBalance = () => {
    axios.patch(
      "http://localhost:5000/update_balance",
      { update: updateBalance },
      { withCredentials: true }
    );
  };

  const handleLogout = () => {
    axios
      .post("http://localhost:5000/logout", {}, { withCredentials: true })
      .catch((error) => {
        console.log(error);
        alert("An error occurred during logout."); // alert user on error
      });
  };
  return (
    <div>
      <button onClick={handleBalance}>
        Click to add 420$ to your account!
      </button>
      <button onClick={handleLogout}>Press to erase everything handsome</button>
    </div>
  );
}

export default Scratchers;
