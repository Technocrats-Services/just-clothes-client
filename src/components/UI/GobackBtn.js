import React from "react";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Gobackbtn = () => {
  let history = useHistory();
  return (
    <>
      <button onClick={() => useNavigate().goBack()}>Back</button>
    </>
  );
};
