export const GET_LOGIN_DATA = "GET_LOGIN_DATA";
export const GET_SIGNIN_DATA = "GET_SIGNIN_DATA";
export const login = (formData) => {
  return async (dispatch) => {
    try {
      const role = sessionStorage.getItem('role');
      const response = await fetch(`https://servimatch.onrender.com/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Assuming your server sends back some data, you can dispatch an action with that data
      dispatch({
        type: GET_LOGIN_DATA,
        payload: data, // Adjust this based on the actual structure of your server response
      });
    } catch (error) {
      console.error("Login failed:", error);
      // Handle any error or dispatch an error action if needed
    }
  };
};
export const signup = (formData) => {
  return async (dispatch) => {
    try {
      const role = sessionStorage.getItem('role');
      const response = await fetch(`https://servimatch.onrender.com/auth/register`, {
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
      // Assuming your server sends back some data, you can dispatch an action with that data

    } catch (error) {
      console.error("Login failed:", error);
      // Handle any error or dispatch an error action if needed
    }
  };
};