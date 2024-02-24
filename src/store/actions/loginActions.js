export const GET_LOGIN_DATA = "GET_LOGIN_DATA";
export const GET_SIGNIN_DATA = "GET_SIGNIN_DATA";
export const GET_USER_DATA = "GET_USER_DATA";
const API_URL = import.meta.env.VITE_API_URL;

export const login = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const role = sessionStorage.getItem("role");
      console.log(role);
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      const token = data.token;
      console.log("Token:", token);
      // Save the token to local storage
      localStorage.setItem('token', token);

      // Assuming your server sends back some data, you can dispatch an action with that data
      dispatch({
        type: GET_LOGIN_DATA,
        payload: data, // Adjust this based on the actual structure of your server response
      });
      if (token) {
        if (role === "VENDOR") {

          navigate("/vendor-dashboard");
        } else if (role === "ISSUER") {
          navigate("/issuer-dashboard");
        }
        // Redirect to /vendor-form if signup was successful

      }
    } catch (error) {
      console.error("Login failed:", error);
      // Handle any error or dispatch an error action if needed
    }
  };
};

export const signup = (formData, navigate) => {
  const role = sessionStorage.getItem("role");
  console.log(role);
  return async (dispatch) => {
    try {

      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Assuming the server response has a 'token' property
      const token = data.token;
      console.log("Token:", token);

      // Save the token to local storage
      localStorage.setItem('token', token);

      dispatch({
        type: GET_LOGIN_DATA,
        payload: data,
      });

      // Check if the signup was successful based on the response data
      if (token) {
        if (role === "VENDOR") {
          navigate("/vendor-form");
        }
        else if (role === "ISSUER") {
          navigate("/issuer-form");
        }
        // Redirect to /vendor-form if signup was successful

      }
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle any error or dispatch an error action if needed
    }
  };
};
export const register_vendor = (formData, navigate) => {
  const role = sessionStorage.getItem("role");
  return async (dispatch) => {
    try {

      const response = await fetch(`${API_URL}/vendor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Assuming the server response has a 'token' property
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      // Save the token to local storage


      dispatch({
        type: GET_USER_DATA,
        payload: data,
      });

      // Check if the signup was successful based on the response data
      if (token) {
        if (role === "VENDOR") {
          navigate("/vendor-dashboard");
        }
        else if (role === "ISSUER") {
          navigate("/issuer-dashboard");
        }
        // Redirect to /vendor-form if signup was successful

      }
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle any error or dispatch an error action if needed
    }
  };
};
export const register_Issuer = (formData, navigate) => {
  return async (dispatch) => {
    try {
      const role = sessionStorage.getItem("role");
      const response = await fetch(`${API_URL}/issuers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Assuming the server response has a 'token' property
      const token = localStorage.getItem("token");
      console.log("Token:", token);

      // Save the token to local storage


      dispatch({
        type: GET_USER_DATA,
        payload: data,
      });

      // Check if the signup was successful based on the response data
      if (token) {
        if (role === "VENDOR") {
          navigate("/vendor-dashboard");
        }
        else if (role === "ISSUER") {
          navigate("/issuer-dashboard");
        }
        // Redirect to /vendor-form if signup was successful

      }
    } catch (error) {
      console.error("Signup failed:", error);
      // Handle any error or dispatch an error action if needed
    }
  };
};



