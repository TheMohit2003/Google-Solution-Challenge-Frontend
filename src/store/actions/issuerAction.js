// issuers/    --create issuer post
//issuer/getIssuerDetail  --get issuer details get --profile


const API_URL = import.meta.env.VITE_API_URL;
export const GET_ISSUER_DETAILS = "GET_ISSUER_DETAILS";
export const GET_ALL_SERVICES_BY_ISSUER = "GET_ALL_SERVICES_BY_ISSUER"

export const getIssuerDetails = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/issuers/getIssuerDetail`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            console.log("Token:", localStorage.getItem('token'));
            const data = await response.json();
            // console.log(data);
            dispatch({
                type: GET_ISSUER_DETAILS,
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}

export const getAllServicesByIssuer = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${API_URL}/service/getAllServicesByIssuer`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": localStorage.getItem('token')
                }
            });
            const data = await response.json();
            console.log(data);
            dispatch({
                type: GET_ALL_SERVICES_BY_ISSUER,
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
};
