import React from "react";
import MainNavbar from "../components/UI/MainNavbar";
import Footer from "../components/UI/footer";

const Support = () => {
  return (
    <>
      <MainNavbar />
      <div className="p-3 mt-5">
        <h2 className="text-center">
          For any quarries mail us at-
          <a href="mailto:justcloths.in@gmail.com">justcloths.in@gmail.com</a>
        </h2>
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
    </>
  );
};
export default Support;
