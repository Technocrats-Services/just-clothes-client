import React from "react";
// import Navbar from "./UI/navbar.js";
import MainNavbar from "./UI/MainNavbar.js";
import Footer from "./UI/footer.js";

import Pcb1 from "././UI/Mainpage/pcblock1.js";
import Pcb2 from "././UI/Mainpage/pcblck2.js";
import Pcb3 from "././UI/Mainpage/pcblock3.js";
import Pcb4 from "././UI/Mainpage/pcblc4.js";
import Pcb5 from "././UI/Mainpage/pcblock5.js";

const Main = () => {
  return (
    <>
      <MainNavbar />
      <Pcb1 />
      <Pcb2 />
      <Pcb3 />
      <Pcb4 />
      <Pcb5 />
      <Footer />
    </>
  );
};

export default Main;
