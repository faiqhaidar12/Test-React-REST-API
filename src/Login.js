import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "./authActions";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setErrorSnackbarOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(error); // Set the error message
      setErrorSnackbarOpen(true);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form onSubmit={onSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={onChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </form>
          <Link to="/register">Belum Punya Akun? Daftar</Link>
          <Snackbar
            open={errorSnackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message={errorMessage}
          />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default connect(null, { login })(Login);
