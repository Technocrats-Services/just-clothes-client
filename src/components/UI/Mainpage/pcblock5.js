import img1 from "./res/clr1.jpg";
import "./pcb5.css";

// import Carousel from 'react-bootstrap/Carousel';

export default function Pcb5() {
  return (
    <div className="cont">
      <img
        className="img-responsive"
        src={img1}
        alt="Snow"
        style={{ width: "100%" }}
      ></img>
      <div className="centered">
        <h1>100% Free <br /> T-Shirts for you</h1>
        <button className=" p-1 px-2   btn btn-primary" >
          <a style={{color:"white",textDecoration:"none"}} href="https://quizzory.in/id/6229d12c5cd88723c3ef88a4">Lets get started</a>
        </button>
      </div>
    </div>
  );
}
