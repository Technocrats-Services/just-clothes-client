import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./UI/navbar.js";
import MainNavbar from "./UI/MainNavbar.js";
import Footer from "./UI/footer.js";
import CardGroupContianer from "./UI/CardGroup";
import axios from "axios";

const ItemWomen = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getData = () => {
    axios
      .get("https://rocky-depths-93645.herokuapp.com/api/item/women")
      .then((response) => {
        // console.log(response);
        const myItem = response.data;
        // console.log(myItem);
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
      {/* <Navbar /> */}
      <MainNavbar />
      <div className="p-3">
        <h1 className="mb-5">Terms and Conditions for JustClothes</h1>
        <h2>Introduction</h2>
        <p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, JustClothes accessible at www.justclothes.in.

These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.

Minors or people below 18 years old are not allowed to use this Website.</p>
        <h2>Intellectual Property Rights</h2>
        <p>Other than the content you own, under these Terms, JustClothes and/or its licensors own all the intellectual property rights and materials contained in this Website.

You are granted limited license only for purposes of viewing the material contained on this Website.</p>
        <h2>Restrictions</h2>
        <p>You are specifically restricted from all of the following:

publishing any Website material in any other media;
selling, sublicensing and/or otherwise commercializing any Website material;
publicly performing and/or showing any Website material;
using this Website in any way that is or may be damaging to this Website;
using this Website in any way that impacts user access to this Website;
using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
using this Website to engage in any advertising or marketing.
Certain areas of this Website are restricted from being access by you and JustClothes may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p>
        <h2>Your Content</h2>
        <p>In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant JustClothes a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.

Your Content must be your own and must not be invading any third-party’s rights. JustClothes reserves the right to remove any of Your Content from this Website at any time without notice.</p>
        <h2>Your Privacy</h2>
        <p>Please read Privacy Policy.</p>
        <h2>No warranties</h2>
        <p>This Website is provided "as is," with all faults, and JustClothes express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p>
        <h2>Limitation of liability</h2>
        <p>In no event shall JustClothes, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract.  JustClothes, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p>
        <h2>Indemnification</h2>
        <p>You hereby indemnify to the fullest extent JustClothes from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p>
        <h2>Severability</h2>
        <p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p>
        <h2>Variation of Terms</h2>
        <p>JustClothes is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p>
        <h2>Assignment</h2>
        <p>The JustClothes is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p>
        <h2>Entire Agreement</h2>
        <p>These Terms constitute the entire agreement between JustClothes and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p>
        <h2>Governing Law & Jurisdiction</h2> 
        <p>These Terms will be governed by and interpreted in accordance with the laws of the State of in, and you submit to the non-exclusive jurisdiction of the state and federal courts located in in for the resolution of any disputes.</p>    
      </div>
      <Footer />
    </>
  );
};

export default ItemWomen;
