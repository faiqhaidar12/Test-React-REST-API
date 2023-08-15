import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "./authActions";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

const Register = ({ register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role_id: 3,
    password_confirmation: "",
  });
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const { name, email, password, password_confirmation } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({
        name,
        email,
        password,
        role_id: 3,
        password_confirmation,
      });
      alert("Anda berhasil mendaftar!");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.email) {
        setEmailError("Email sudah digunakan.");
      } else {
        setError("Terjadi kesalahan. Silakan cek kembali data Anda.");
      }
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          {error && <div style={{ color: "red" }}>{error}</div>}
          {emailError && <div style={{ color: "red" }}>{emailError}</div>}
          <form onSubmit={onSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              value={name}
              onChange={onChange}
            />
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={onChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Confirm Password"
              type="password"
              id="password_confirmation"
              autoComplete="new-password"
              value={password_confirmation}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </form>
          <Link to="/login">Sudah punya akun? Masuk</Link>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default connect(null, { register })(Register);
