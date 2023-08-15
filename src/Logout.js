// Logout.js
import React from "react";
import { connect } from "react-redux";
import { logout } from "./authActions";
import { useNavigate } from "react-router-dom";

const Logout = ({ logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default connect(null, { logout })(Logout);
