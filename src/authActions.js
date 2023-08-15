// authActions.js
import axios from "axios";

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://laravel-api-10.cerise.id/api/register",
      userData
    );
    console.log("Registration success:", response.data);
    return response.data;
  } catch (error) {
    console.error("Registration error:", error.response.data);
    throw error;
  }
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: "CLEAR_ERRORS" });
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://laravel-api-10.cerise.id/api/login",
      userData
    );
    console.log("Login success:", response.data);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    console.error("Login error:", error.response.data);
    throw error.response.data.message; // Throw the error message
  }
};

export const logout = () => async (dispatch, getState) => {
  const { token } = getState().auth; // Ambil token dari state
  try {
    const response = await axios.post(
      "https://laravel-api-10.cerise.id/api/logout",
      null,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Logout success:", response.data);
    dispatch({ type: "LOGOUT" }); // Dispatch a logout action
  } catch (error) {
    console.error("Logout error:", error.response.data);
  }
};
