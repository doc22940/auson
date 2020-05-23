const initialState = {
  user: false,
  privateEdges: null,
};

const SET_USER = "SET_USER";
const SET_PRIVATE_EDGES = "SET_PRIVATE_EDGES";

export const setUser = isLoggedIn => ({
  type: SET_USER,
  payload: isLoggedIn,
});

export const setPrivateEdges = privateEdges => ({
  type: SET_PRIVATE_EDGES,
  payload: privateEdges,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_PRIVATE_EDGES:
      return { ...state, privateEdges: action.payload };
    default:
      return state;
  }
};
