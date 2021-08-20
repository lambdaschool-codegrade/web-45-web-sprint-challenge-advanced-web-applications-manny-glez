import React, { useEffect } from "react";
import axisoWithAuth from "../helpers/axiosWithAuth";

const Logout = (props) => {
  useEffect(() => {
    axisoWithAuth()
    .post("/logout")
    .then(res => {
      localStorage.removeItem("token");
      props.history.push("/login");
    })

  }, [])

  return(<div></div>);
}

export default Logout;
