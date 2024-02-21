const initialState = {
  data: {}
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LOGIN_DATA":
      return { ...state, data: action.data };
    case "GET_SIGNIN_DATA":
      return { ...state, data: action.data };
    case "GET_USER_DATA":
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default loginReducer;
