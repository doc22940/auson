const initialState = {
  privateEdges: null,
};

const SET_PRIVATE_EDGES = "SET_PRIVATE_EDGES";

export const setPrivateEdges = privateEdges => ({
  type: SET_PRIVATE_EDGES,
  payload: privateEdges,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIVATE_EDGES:
      return { privateEdges: action.payload };
    default:
      return state;
  }
};
