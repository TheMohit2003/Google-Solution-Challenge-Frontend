// service/getAllServices
// vendor/getVendorDetails
export const GET_VENDOR_DETAILS = "GET_VENDOR_DETAILS";
export const GET_ALL_SERVICES = "GET_ALL_SERVICES";
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
            console.log(data);
            dispatch({
                type: GET_VENDOR_DETAILS,
                data: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}