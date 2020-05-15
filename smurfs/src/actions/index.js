import axios from "axios";

export const fetchData = () => (dispatch) => {
    axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
        console.log(res.data)
        dispatch({ type: "SMURF_ARRAY", payload: res.data });
    })
    .catch((error) => {
      console.log("FAIL", error);
    });
};

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: "SMURF_ADD" });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };