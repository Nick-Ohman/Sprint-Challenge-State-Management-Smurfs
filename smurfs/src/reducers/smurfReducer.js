const initialState = {
    smurfs: [],
    name: "",
    age: "",
    height: "",
  
    isFetching: false,
  };

export const smurfReducer = (state = initialState, action) => {
    switch (action.type){

    default:
        return state;
}}

