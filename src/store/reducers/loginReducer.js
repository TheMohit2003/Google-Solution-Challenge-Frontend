const initialState = {
  name : '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SAVE_NAME':
    return {...state, name : action.payload};
  default:
    return state;
  }
};

export default loginReducer;
