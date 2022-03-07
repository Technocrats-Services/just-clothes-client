import React from "react";
import { useState, useEffect } from "react";
// import Navbar from "./UI/navbar.js";
import MainNavbar from "./UI/MainNavbar";
import Footer from "./UI/footer.js";
import CardGroupContianer from "./UI/CardGroup";
import axios from "axios";

const ItemMen = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getData = () => {
    axios
      .get("https://rocky-depths-93645.herokuapp.com/api//item/men")
      .then((response) => {
        console.log(response);
        const myItem = response.data;
        console.log(myItem);
        setItems(myItem);
      });
  };

  useEffect(() => getData(), []);

  //     useEffect(() => {
  //     fetch('http://127.0.0.1:8000/item/men')
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //           setIsLoaded(true);
  //           setItems(result.data.item);
  // 		  console.log(result);
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //           console.log(error);
  //         }
  //       )
  //   }, [])

  return (
    <>
      {/* <Navbar />  */}
      <MainNavbar />
      <CardGroupContianer items={items} />
      <Footer />
    </>
  );
};

export default ItemMen;
