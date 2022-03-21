import React from 'react'
import image from './res/blck1.gif'
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Pcb1() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const selectHandler = (event) => {
    setNumber(event.target.value);
    console.log(event.target.value, number);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (number == "1") {
      navigate("/item/men");
    }
    if (number == "2") {
      navigate("/item/women");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 mt-3">
          <form>
            <h1 className="mt-5 p-3 ">
              Trending Cloths For You...
            </h1>
            <select
              className="form-select mt-2 rounded-pill "
              aria-label="Default select example"
              onChange={selectHandler}
            >
              <option value="selected">Select</option>
              <option value="1">Men</option>
              <option value="2">Women</option>
            </select>
            <button
              className="mt-3 p-1 px-5 btn btn-primary "
              onClick={submitHandler}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-lg-6 ">
          <img className="img-fluid" src={image} alt="girls" />
        </div>
      </div>
    </div>
  );
}