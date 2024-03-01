// service/getAllServices
// vendor/getVendorDetails
export const GET_VENDOR_DETAILS = "GET_VENDOR_DETAILS";
export const GET_ALL_SERVICES = "GET_ALL_SERVICES";
export const GET_LIVE_SERVICES = "GET_LIVE_SERVICES";
export const GET_WATCH_LIST = "GET_WATCH_LIST";
export const INTEREST = "INTEREST";
const API_URL = import.meta.env.VITE_API_URL;

export const getAllServices = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/service/getAllServices`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
          
            const token = localStorage.getItem('token');
           
            dispatch({
                type: GET_ALL_SERVICES,
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}
export const getLiveServices = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/service/getAllLiveServices`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
      
            dispatch({
                type: GET_LIVE_SERVICES,
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}
export const getVendorDetails = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/vendor`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
           
            dispatch({
                type: GET_VENDOR_DETAILS,
                data: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}
export const getWatchList = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/vendor/interests`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
            
            const token = localStorage.getItem('token');
            
            dispatch({
                type: GET_WATCH_LIST,
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}
export const interest = (formData, navigate) => {
    const role = sessionStorage.getItem("role");
    return async (dispatch) => {
        try {

            const response = await fetch(`${API_URL}/vendor/interest`, {
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
         

            // Save the token to local storage


            dispatch({
                type: INTEREST,
                payload: data,
            });

            // Check if the signup was successful based on the response data
            
                if (role === "VENDOR") {
                    navigate("/vendor-dashboard");
                }
                else if (role === "ISSUER") {
                    navigate("/issuer-dashboard");
                }
                // Redirect to /vendor-form if signup was successful

            
        } catch (error) {
            console.error("Signup failed:", error);
            // Handle any error or dispatch an error action if needed
        }
    };
};