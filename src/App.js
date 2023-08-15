import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to My App
      </Typography>
      <Typography variant="body1" paragraph>
        Explore the features and functionality of our app.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 16,
        }}
      >
        {!isAuthenticated ? (
          <>
            <Link to="/login">
              <Button variant="contained" color="primary">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outlined" color="primary">
                Register
              </Button>
            </Link>
          </>
        ) : (
          <Link to="/dashboard">
            <Button variant="contained" color="primary">
              Go to Dashboard
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default App;
