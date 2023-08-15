import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "./authActions"; // Pastikan Anda mengimpor aksi logout
import {
  CssBaseline,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
} from "@mui/material";

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch(); // Inisialisasi useDispatch untuk mengirim aksi ke Redux
  const user = useSelector((state) => state.auth.user);

  // Fungsi untuk melakukan logout
  const handleLogout = () => {
    // Panggil aksi logout
    dispatch(logout());
  };

  // Jika belum masuk, arahkan ke halaman login
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                Selamat Datang, {user ? user.name : "Pengguna"}
              </Typography>
              <Typography variant="body1" paragraph>
                Selamat, Anda berhasil login!
              </Typography>
              {/* Tombol Logout */}
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: 2 }}
                fullWidth
                onClick={handleLogout} // Panggil fungsi handleLogout saat tombol diklik
              >
                Logout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
