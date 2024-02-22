
const API_URL = import.meta.env.VITE_API_URL;
export const GET_NEW_BID = "GET_NEW_BID";
export const newBid = (formData, navigate) => {
    return async (dispatch) => {
        try {
            const role = sessionStorage.getItem("role");
            const response = await fetch(`${API_URL}/service/createService`, {
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

            // Save the token to local storage\
            dispatch({
                type: GET_NEW_BID,
                payload: data,
            });

            // Check if the signup was successful based on the response data
            // if () {
            //     if (role === "VENDOR") {
            //         navigate("/vendor-dashboard");
            //     }
            //     else if (role === "ISSUER") {
            //         navigate("/issuer-dashboard");
            //     }
            //     // Redirect to /vendor-form if signup was successful
            // }
        } catch (error) {
            console.error("Signup failed:", error);
            // Handle any error or dispatch an error action if needed
        }
    };
};

export const getServiceDetails = () => {
    const serviceId = sessionStorage.getItem("serviceId");
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/service/getServiceById/${serviceId}` , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
            console.log(data);
            dispatch({
                type: GET_ALL_SERVICES,
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}
// service/cearteService  --create service post
// service/getAllServices --get all services get
