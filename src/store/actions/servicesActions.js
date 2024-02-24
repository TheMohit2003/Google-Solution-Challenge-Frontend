
const API_URL = import.meta.env.VITE_API_URL;
export const GET_SERVICES_DETAILS = "GET_ISSUER_DETAILS";
// /vendor/interests --token  --post               
// serviceid

// /vendor/listIntrestedServices --token --get token

// /sevice/getAllLiveServices --token --get


export const getServices = () => {
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
                type: GET_SERVICES_DETAILS,
                payload: data,
            });
        } catch (error) {
            console.error("Get Vendor Details failed:", error);
        }
    };
}