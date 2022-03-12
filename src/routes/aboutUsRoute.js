import React from "react";
import MainNavbar from "../components/UI/MainNavbar";
import Footer from "../components/UI/footer";
const AboutUs = () => {
  return (
    <>
      <MainNavbar />
      <div>
        <h1 className="text-center my-5">About Us JustClothes -</h1>
        <p className="text-center">
          JustClothes helps you to save your time because you go on many
          platforms to find premium quality clothes for yourself but you don't
          find any fabric of your choice then JustClothes connects you with all
          the platform. Provides premium quality clothing, in very less time and
          you will see absolutely premium quality clothes so that you will not
          face any problem after getting the product.
        </p>
        <h1 className="text-center my-5">Why Started This Company -</h1>
        <p className="text-center">
          Dear, boys and girls, if you want to get clothes for yourself, then
          you go to any platform and see clothes for yourself but you do not get
          the clothes of your choice, then you go to a new platform, then you
          will get the clothes of your choice. But you do not like the quality
          of clothes, so JustClothes helps you to get you premium quality
          clothes. Our team reviews all the products by connecting with all the
          platforms so that you will never face any problem. If you take the
          clothes of your choice through JustClothes. Thank you !
        </p>
        <h1 className="text-center my-5">Note -</h1>
        <p className="text-center">
          Do give us your feedback by mailing us at justcloths.in@gmail.com
        </p>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
