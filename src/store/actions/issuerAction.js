// issuers/    --create issuer post
//issuer/getIssuerDetail  --get issuer details get --profile


const API_URL = import.meta.env.VITE_API_URL;
export const GET_VENDOR_DETAILS = "GET_VENDOR_DETAILS";

export const getIssuerDetails = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/issuer/getIssuerDetails`, {
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
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}