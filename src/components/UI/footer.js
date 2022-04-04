import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#0d6efd", color: "white" }}>
      <h4 className="pt-5 text-center">Join our community and stay updated </h4>
      <div className="d-flex justify-content-center py-4">
        <a
          style={{ color: "white" }}
          href="https://www.instagram.com/justclothes.india/"
        >
          <i className="bi bi-instagram "></i>
        </a>
        <a style={{ color: "white" }} href="http://fb.me/justclothes.india">
          <i className="bi bi-facebook px-4"></i>
        </a>
        <a
          style={{ color: "white" }}
          href="https://twitter.com/JustClothes_in?t=6q4d0neGKHvjLrjnpUPaAQ&s=09"
        >
          <i className="bi bi-twitter "></i>
        </a>
      </div>
      <h6 className="pb-5 text-center">
        For any queries mail us at :-
        <span>
          <a style={{ color: "white" }} href="mailto:justclothes.in@gmail.com">
            justclothes.in@gmail.com
          </a>
        </span>
      </h6>
      <p className="pb-3 m-0 text-center">© 2022, JustClothes All Right Reserved</p>
    </div>
  );
}
