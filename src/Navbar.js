// Navbar.js
import React from "react";
import { connect } from "react-redux";

const Navbar = ({ isAuthenticated, user }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Homes</a>
        </li>
        {isAuthenticated ? (
          <>
            <li>Hello, {user.name}</li>
            <li>
              <a href="/logout">Logout</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Navbar);
